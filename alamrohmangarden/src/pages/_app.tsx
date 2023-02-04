import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { PullDownContent, PullToRefresh, RefreshContent, ReleaseContent } from 'react-js-pull-to-refresh'
import { Device } from '@capacitor/device'

export default function App({ Component, pageProps }: AppProps) {
  const [platform, setPlatform] = useState<'web' | 'android' | 'ios'>('web')
  const [swRegistration, setswRegistration] = useState<ServiceWorkerRegistration>()
  const router = useRouter()
  
  useEffect(() => {
    getPlatform()
    requestNotificationPermission()
    registerServiceWorker()
  }, [])

  const registerServiceWorker = async () => {
    const swRegistration = await navigator.serviceWorker.register('sw.js'); //notice the file name
    setswRegistration(swRegistration)
  }

  const requestNotificationPermission = async () => {
    const permission = await window.Notification.requestPermission();
    // value of permission can be 'granted', 'default', 'denied'
    // granted: user has accepted the request
    // default: user has dismissed the notification permission popup by clicking on x
    // denied: user has denied the request.
    if(permission !== 'granted'){
      // throw new Error('Permission not granted for Notification');
    }

    console.log(`notification permission: ${permission}`)
  }

  const getPlatform = async () => {
    const { platform } = await Device.getInfo()
    setPlatform(platform)
  }

  if (platform !== 'web') {
    return (
      <PullToRefresh
        onRefresh={async () => router.reload()}
        pullDownContent={<PullDownContent />}
        releaseContent={<ReleaseContent />}
        refreshContent={<RefreshContent />}
        pullDownThreshold={200}
        triggerHeight={200}
      >
        <Component {...pageProps} />
      </PullToRefresh>
    )
  }

  return <Component {...pageProps} />
}
