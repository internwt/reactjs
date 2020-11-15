import React from 'react'
import { Route } from 'react-router-dom';
import { BasicFlow } from '../home'
import PrivateRoute from './PrivateGuard';
function PublicRoute() {
    return (
        <div>
          <PrivateRoute path={'/map'} restricted={true}  component={BasicFlow}/>
          <PrivateRoute path={'/chats'} restricted={true}  component={BasicFlow}/>
        </div>
    )
}

export default PublicRoute
