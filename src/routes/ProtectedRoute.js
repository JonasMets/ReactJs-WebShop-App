import React from 'react'

import { Route, Redirect } from 'react-router-dom'

// import AuthService from '../services/AuthService'

import { useSelector } from 'react-redux';

function ProtectedRoute({ component: Component, ...rest }) {

  // initierar en bool som får värdet från store reducers
  // const isAuthenticated = useSelector(state => state.reducerAuthenticate.isAuthenticated)
  const isAuthenticated = useSelector(state => state.reducerAuthenticate.isAuthenticated)
  const userRole = useSelector(state => state.reducerAuthenticate.currentUser.userRole)

  return (
    <Route {...rest} render={props => {

      if (isAuthenticated) {
        // console.log(props.location.pathname)
        // console.log(userRole)

        if (props.location.pathname === '/admin' && userRole === 'admin') {
          console.log('admin')
          return <Component {...props} />
        } else if(props.location.pathname === '/admin' && userRole !== 'admin') {
          console.log('not admin')
          return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        }
        
        return <Component {...props} />

      } else {
        return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      }

    }} />
  )

}

export default ProtectedRoute
