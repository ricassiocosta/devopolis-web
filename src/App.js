import React from 'react'
import { Provider } from 'react-redux'

import GlobalStyle from './assets/stylesheets'
import GlobalFonts from './assets/fonts';

import store from './store'

import Routes from './routes'

export default function App () {
  return ( 
    <Provider store={store}>
      <GlobalStyle/>
      <GlobalFonts/>
      <Routes /> 
    </Provider>
  )
}
