import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import jwtDecode from 'jwt-decode';

import Navbar from './components/Navbar';
import AuthRoute from './util/AuthRoute';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';

let authenticated;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = '/login';
    authenticated = false;
  } else {
    authenticated = true;
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <AuthRoute
                path="/login"
                exact
                component={Login}
                authenticated={authenticated}
              />
              <AuthRoute path="/signup" exact component={Signup} />
              <AuthRoute
                path="/resetpassword"
                exact
                component={ResetPassword}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
