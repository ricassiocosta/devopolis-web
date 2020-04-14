import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login/index'
import Feed from './pages/Feed/index'
import Callback from './pages/Callback/index'

const Routes = () => {
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

export default Routes