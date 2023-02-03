import { SecureStoragePlugin } from "capacitor-secure-storage-plugin"

const GetTheme = async ():Promise<'light' | 'dark'> => {
  const theme = await SecureStoragePlugin
    .get({key: 'theme'})
    .then(val => val.value as 'light' | 'dark')
    .catch(async () => {
      await SecureStoragePlugin.set({key: 'theme', value: 'dark'})
      return 'light' as 'light' | 'dark'
    })
  if (theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  return theme
}

export default GetTheme