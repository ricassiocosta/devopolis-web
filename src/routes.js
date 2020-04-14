import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import CustomRoute from './components/CustomRoute'

import Login from './pages/Login/index'
import Feed from './pages/Feed/index'
import Callback from './pages/Callback/index'

const Routes = store => {
  return (
    <BrowserRouter>
      <CustomRoute
        path="/login"
        exact
        component={Login}
        isPublic={true}
        store={store}
      />
      <CustomRoute
        path="/callback"
        exact
        component={Callback}
        isPublic={true}
        store={store}
      />
      <CustomRoute path="/" exact component={Feed} store={store} />
    </BrowserRouter>
  )
}

export default Routes
