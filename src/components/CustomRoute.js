import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const CustomRoute = ({ component: Component, store, isPublic = false, ...rest }) => {
  const state = store.getState()
  const { isAuthenticated } = state.auth

  let componentToBeRendered = props => <Component {...props} />
  if (isPublic && isAuthenticated) {
    componentToBeRendered = () => <Redirect to="/" />
  }

  if (!isPublic && !isAuthenticated) {
    componentToBeRendered = () => <Redirect to="/login" />
  }

  return <Route {...rest} render={props => componentToBeRendered(props)} />
}

CustomRoute.propTypes = {
  component: PropTypes.func,
  isPublic: PropTypes.bool,
  store: PropTypes.object
}

export default CustomRoute
