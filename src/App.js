import React from 'react'
import GlobalStyle from './GlobalStyle.js'
import GlobalFonts from './fonts/fonts';
import Routes from './routes'

export default function App () {
  return ( 
    <>
      <GlobalStyle/>
      <GlobalFonts/>
      <Routes /> 
    </>
  )
}
