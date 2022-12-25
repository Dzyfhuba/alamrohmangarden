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