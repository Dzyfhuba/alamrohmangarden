import { useEffect } from "react";

let SWRegistration: ServiceWorkerRegistration | undefined;

const LocalNotification = {
  registerServiceWorker: async() => {
    const swRegistration = await window!.navigator.serviceWorker.register('sw.js'); //notice the file name
    // this.swRegistration = swRegistration
    SWRegistration = swRegistration
    console.log(`service worker registered: ${JSON.stringify(swRegistration)}`)
  },
  
  requestNotificationPermission: async() => {
    const permission = await window!.Notification.requestPermission();
    // value of permission can be 'granted', 'default', 'denied'
    // granted: user has accepted the request
    // default: user has dismissed the notification permission popup by clicking on x
    // denied: user has denied the request.
    if(permission !== 'granted') {
      // throw new Error('Permission not granted for Notification');
    }
  
    console.log(`notification permission: ${permission}`)
  },
  
  showNotification({ title, body }: {title: string, body: string}) {
    // this.swRegistration!.showNotification(title, {
    //   body,
    //   // here you can add more properties like icon, image, vibrate, etc.
    // });
    SWRegistration!.showNotification(title, {
      body,
      // here you can add more properties like icon, image, vibrate, etc.
    });
  }
}

export const useLocalNotification = () => {
  useEffect(() => {
    LocalNotification.registerServiceWorker()
    LocalNotification.requestNotificationPermission()
  }, [])
  return { showNotification: LocalNotification.showNotification }
}

export default LocalNotification