import '../styles/main.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import YandexMetrica from '../components/YandexMetrica/YandexMetrica';

export default function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <YandexMetrica />
      <Component {...pageProps} />
    </Provider>
  )
}