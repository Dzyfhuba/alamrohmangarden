import { createStore, action, Action } from 'easy-peasy'


export interface StoreModel {
  theme: 'light' | 'dark';
  themeToggle: Action<StoreModel, 'light' | 'dark'>;
  isLoading: boolean;
  setLoading: Action<StoreModel, boolean>;
  isLoggedIn: boolean,
  setLoggedIn: Action<StoreModel, boolean>
}

export const store = createStore<StoreModel>({
  theme: 'light',
  themeToggle: action((state, payload) => {
    state.theme = payload
  }),
  isLoading: false,
  setLoading: action((state, payload) => {
    state.isLoading = payload
  }),
  isLoggedIn: false,
  setLoggedIn: action((state, payload) => {
    state.isLoggedIn = payload
  })
});

// const themeInitial = async () => {
//   const theme = await SecureStoragePlugin.get({key: 'theme'}).catch(async () => await SecureStoragePlugin.set({key: 'theme', value: 'dark'}))
//   if (theme.value === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     document.documentElement.classList.add('dark')
//   } else {
//     document.documentElement.classList.remove('dark')
//   }

//   return theme
// }