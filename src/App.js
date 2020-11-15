import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import SignUp from './Components/Signup'
import PublicRoute from './Guards/PublicRoute'

function App() {
  return (
    <Router>
      <Switch >
        <Route path = {'/'} component={PublicRoute}/>
      </Switch>
    </Router>
  )
}
export default App;

