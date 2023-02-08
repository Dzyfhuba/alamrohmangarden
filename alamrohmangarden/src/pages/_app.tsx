import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { PullDownContent, PullToRefresh, RefreshContent, ReleaseContent } from 'react-js-pull-to-refresh'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], preload: true })

export default function App({ Component, pageProps }: AppProps) {
  const [screenSize, setScreenSize] = useState<number>(9999999)
  const router = useRouter()
  
  useEffect(() => {
    const screenSize = window.screen.availWidth
    setScreenSize(screenSize)
  }, [])

  if (screenSize > 768) {
    return (
      <>
        <style jsx global>
          {`
          html {
            font-family: ${montserrat.style.fontFamily}
          }
        `}
        </style>
        <Component />
      </>
    )
  }

  return (
    <PullToRefresh
      onRefresh={async() => router.reload()}
      pullDownContent={<PullDownContent />}
      releaseContent={<ReleaseContent />}
      refreshContent={<RefreshContent />}
      pullDownThreshold={200}
      triggerHeight={200}
    >
      <style jsx global>
        {`
          html {
            font-family: ${montserrat.style.fontFamily}
          }
        `}
      </style>
      <Component {...pageProps} />
    </PullToRefresh>
  )
}
