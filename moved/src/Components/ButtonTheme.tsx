import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin'
import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useStoreActions } from '../State/hook'
import GetTheme from '../Utils/GetTheme'
import Button from './Button'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonTheme = (props: Props) => {
  const [theme, setTheme] = useState<string>('light')
  const themeToggle = useStoreActions((actions) => actions.themeToggle)
  useEffect(() => {
    (async () => {
      const theme = await GetTheme()
      setTheme(theme)
    })()
  }, [])

  return (
    <Button
      {...props}
      onClick={
        async() => {
          await SecureStoragePlugin
            .set({key: 'theme', value: (await SecureStoragePlugin.get({key: 'theme'})).value === 'light' ? 'dark' : 'light'})
          const fromStorage = await SecureStoragePlugin.get({ key: 'theme' })
            .then(val => val.value as 'light' | 'dark')
            .catch(() => 'dark' as 'light' | 'dark')

          setTheme(fromStorage)
          themeToggle(fromStorage)
          if (fromStorage === 'dark') {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        }
      }
    >
      {theme === 'dark' ? <MdDarkMode /> : <MdLightMode /> }
    </Button>
  )
}

export default ButtonTheme