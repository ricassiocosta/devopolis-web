import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login/index'
import Feed from './pages/Feed/index'
import Callback from './pages/Callback/index'
import Profile from './pages/Profile/index'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/callback" component={Callback}/>
        <Route path="/dashboard" component={Feed}/>
        <Route path="/profile" component={Profile}/>
    />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes