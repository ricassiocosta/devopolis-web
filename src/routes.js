import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Login from './pages/Login/index'
import Feed from './pages/Feed/index'
import Callback from './pages/Callback/index'
import Profile from './pages/Profile/index'
import PostDetail from './pages/PostDetail/index'

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => !!state.root.token)

  useEffect(() => {
  }, [isAuthenticated]);

  return (
    <Route
    {...rest}
    render={(props) => isAuthenticated ? (
            <Component {...props} {...rest} />
        ) : (
            <Redirect to={'/login'}/>
        )
    }
    />
  );
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login}/>
        <Route path="/callback" component={Callback}/>
        <AuthenticatedRoute path="/" component={Feed} />
        <AuthenticatedRoute path="/:username" exact component={Profile}/>
        <AuthenticatedRoute path="/:username/:postId" component={PostDetail}/>
      />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes