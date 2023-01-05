import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './Routes'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {ProSidebarProvider} from 'react-pro-sidebar'
import { StoreProvider } from 'easy-peasy';
import { store } from './State/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';
import LoadingLayer from './Containers/LoadingLayer';

// get dark theme in first time after load/reload
(async () => {
  const theme = await SecureStoragePlugin.get({key: 'theme'}).catch(async () => await SecureStoragePlugin.set({key: 'theme', value: 'dark'}))
  if (theme.value === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoreProvider store={store}>
    <ProSidebarProvider>
      <LoadingLayer />
      <Routes />
    </ProSidebarProvider>
    <ToastContainer />
  </StoreProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
