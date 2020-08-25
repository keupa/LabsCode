import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserRegistration from './components/UserRegistration'
import UserHome from './components/UserHome'
import { AuthProvider } from './Auth/Auth'
import PrivateRoute from './Auth/PrivateRoute'
import './App.css';

import 'materialize-css/dist/css/materialize.min.css'

function App() {

  const [ firstName, setFirstName ] = useState(null)
  
  return (
    <AuthProvider>
      <Router>
          <Switch>
          <Route exact path = "/user-registration" render={() => <UserRegistration />}/>
            <PrivateRoute exact path = "/user-home" render={() => <UserHome />}/>
          </Switch>
        </Router>
    </AuthProvider>
  )
}

export default App;
