import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import GlobalStyle from './assets/stylesheets'
import GlobalFonts from './assets/fonts'

import { store, persistor } from './store'

import Routes from './routes'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <GlobalFonts />
        <Routes />
      </PersistGate>
    </Provider>
  )
}
