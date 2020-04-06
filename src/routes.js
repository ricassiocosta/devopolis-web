import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login/index'
import Feed from './pages/Feed/index'
import Callback from './pages/Callback/index'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/callback" exact component={Callback}/>
        <Route path="/dashboard" exact component={Feed}/>
      </Switch>
    </BrowserRouter>
  )
}
