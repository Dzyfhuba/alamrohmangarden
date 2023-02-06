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
  // urlB64ToUint8Array is a magic function that will encode the base64 public key
  // to Array buffer which is needed by the subscription option
  const urlB64ToUint8Array = base64String => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
    const rawData = atob(base64)
    const outputArray = new Uint8Array(rawData.length)
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }
  self.addEventListener('activate', async () => {
  // This will be called only once when the service worker is activated.
    try {
      const applicationServerKey = urlB64ToUint8Array(
        'BOdJxFw84tf1UoNWjKJTt5VtCt19v5nD3wungFgFil-QhjUgfzZv9tHOVhyfrS2iV2gCWYtgqbNzUu24_VF-TJM'
      )
      const options = { applicationServerKey, userVisibleOnly: true }
      const subscription = await self.registration.pushManager.subscribe(options)
      console.log(JSON.stringify(subscription))
    } catch (err) {
      console.log('Error', err)
    }
  })

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