import '@/styles/globals.css'
import { Device } from '@capacitor/device'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { PullDownContent, PullToRefresh, RefreshContent, ReleaseContent } from 'react-js-pull-to-refresh'
import Guest from '../layouts/Guest'
import { Maven_Pro } from '@next/font/google'
import Head from 'next/head'

const font = Maven_Pro({
  subsets: ['latin'],
  preload: true,
  style: ['normal']
})

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
        <Guest>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </Guest>
      </PullToRefresh>
    )
  }

  return (
    <Guest>
      <style jsx global>
        {`
          html {
            font-family: ${font.style.fontFamily}
          }
        `}
      </style>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Guest>
  )
}
