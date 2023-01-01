import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';
import { createStore, action, Action } from 'easy-peasy'

interface Theme {value: string}

export interface StoreModel {
  theme: Theme;
  themeToggle: Action<StoreModel, Theme>;
}

export const store = createStore<StoreModel>({
  theme: {value: 'light'},
  themeToggle: action((state, payload) => {
    state.theme.value = payload.value
  })
});

const themeInitial = async () => {
  const theme = await SecureStoragePlugin.get({key: 'theme'}).catch(async () => await SecureStoragePlugin.set({key: 'theme', value: 'dark'}))
  if (theme.value === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return theme
}