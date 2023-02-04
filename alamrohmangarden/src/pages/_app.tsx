import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { PullDownContent, PullToRefresh, RefreshContent, ReleaseContent } from 'react-js-pull-to-refresh'
import { Device } from '@capacitor/device'

export default function App({ Component, pageProps }: AppProps) {
  const [platform, setPlatform] = useState<'web' | 'android' | 'ios'>('web')
  const router = useRouter()
  
  useEffect(() => {
    getPlatform()
  }, [])

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
