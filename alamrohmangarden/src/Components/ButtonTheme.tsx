import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin'
import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import Button from './Button'

type Props = {}

const ButtonTheme = (props: Props) => {
  const [theme, setTheme] = useState<string>('light')
  useEffect(() => {
    (async () => {
      setTheme((await SecureStoragePlugin.get({ key: 'theme' })).value)
    })()
  }, [])

  return (
    <Button 
      onClick={
        async() => {
          await SecureStoragePlugin
            .set({key: 'theme', value: (await SecureStoragePlugin.get({key: 'theme'})).value === 'light' ? 'dark' : 'light'})
          const fromStorage = (await SecureStoragePlugin.get({ key: 'theme' })).value
          setTheme(fromStorage)
        }
      }
    >
      {theme === 'dark' ? <MdDarkMode /> : <MdLightMode /> }
    </Button>
  )
}

export default ButtonTheme