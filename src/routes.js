import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Login from './pages/Login/index'
import Feed from './pages/Feed/index'
import Callback from './pages/Callback/index'

const Routes = (store) => {
  const CustomRoute = ({ component: Component, isPublic = false, ...rest }) => {
    const state = store.getState()
    const { isAuthenticated } = state.auth

    let componentToBeRendered = (props) => <Component {...props}/>
    if (isPublic && isAuthenticated) {
      componentToBeRendered = () => <Redirect to='/' />
    }

    if (!isPublic && !isAuthenticated) {
      componentToBeRendered = () => <Redirect to='/login' />
    }

    return <Route  {...rest} render={(props) => componentToBeRendered(props)} />
  }

  return (
    <BrowserRouter>
      <CustomRoute path="/login" exact component={Login} isPublic={true} />
      <CustomRoute path="/callback" exact component={Callback} isPublic={true} />
      <CustomRoute path="/" exact component={Feed} />
    </BrowserRouter>
  )
}

export default Routes
