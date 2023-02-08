/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);


// If the loader is already loaded, just stop.
if (!self.define) {

  // ==============================================================================================

  // saveSubscription saves the subscription to the backend
  const saveSubscription = async subscription => {
    const SERVER_URL = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/save-notification-subscription`
    const response = await fetch(SERVER_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription),
    })
    return response.json()
  }

  self.addEventListener('activate', async () => {
  // This will be called only once when the service worker is activated.
    try {
      // const applicationServerKey = urlB64ToUint8Array(process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY)
      const options = { applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY, userVisibleOnly: true }
      const subscription = await self.registration.pushManager.subscribe(options)
      const response = await saveSubscription(subscription)
      console.log(JSON.stringify(subscription))
      console.log(`response: ${JSON.stringify(response)}`)
    } catch (err) {
      console.log('Error', err)
    }
  })

  self.addEventListener('push', (event) => {
    if (event.data) {
      console.log("Push event!! ", event.data.text());
      showLocalNotification(process.env.NEXT_PUBLIC_APP_NAME, event.data.text(),  self.registration);
    } else {
      console.log("Push event but no data");
    }
  });
  
  const showLocalNotification = (title, body, swRegistration) => {
    const options = {
      body
      // here you can add more properties like icon, image, vibrate, etc.
    };
    swRegistration.showNotification(title, options);
  }

  // ==============================================================================================
  
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
      new Promise(resolve => {
        if ("document" in self) {
          const script = document.createElement("script");
          script.src = uri;
          script.onload = resolve;
          document.head.appendChild(script);
        } else {
          nextDefineUri = uri;
          importScripts(uri);
          resolve();
        }
      })
      
        .then(() => {
          let promise = registry[uri];
          if (!promise) {
            throw new Error(`Module ${uri} didn’t register its module`);
          }
          return promise;
        })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
// define(['./workbox-327c579b'], (function (workbox) { 'use strict';

//   importScripts();
//   self.skipWaiting();
//   workbox.clientsClaim();
//   workbox.registerRoute("/", new workbox.NetworkFirst({
//     "cacheName": "start-url",
//     plugins: [{
//       cacheWillUpdate: async ({
//         request,
//         response,
//         event,
//         state
//       }) => {
//         if (response && response.type === 'opaqueredirect') {
//           return new Response(response.body, {
//             status: 200,
//             statusText: 'OK',
//             headers: response.headers
//           });
//         }
//         return response;
//       }
//     }]
//   }), 'GET');
//   workbox.registerRoute(/.*/i, new workbox.NetworkOnly({
//     "cacheName": "dev",
//     plugins: []
//   }), 'GET');

// }));
//# sourceMappingURL=sw.js.map