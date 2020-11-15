import React from 'react'
import {Route,Redirect} from 'react-router-dom'

function PrivateGuard({component:Component,restricted,...rest}) {
    console.log(`components`,restricted,Component,rest)
    return (
        <Route {...rest} render={props=>(
        restricted ? <Redirect to="/dashboard" />:<Component {...props}/>
    )}/>
    )
}

export default PrivateGuard
