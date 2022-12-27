import { SecureStoragePlugin } from "capacitor-secure-storage-plugin"

const GetTheme = async ():Promise<string> => {
  const theme = await SecureStoragePlugin.get({key: 'theme'}).catch(async () => await SecureStoragePlugin.set({key: 'theme', value: 'dark'}))
  if (theme.value === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  return theme.value as string
}

export default GetTheme