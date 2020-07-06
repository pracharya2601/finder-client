import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import jwtDecode from 'jwt-decode';

import Navbar from './components/Navbar';
import AuthRoute from './util/AuthRoute';

import Home from './components/Home';
import SinglePlace from './components/places/SinglePlace';
import Profile from './components/profile/Profile';
import Saved from './components/Saved';
import User from './components/User';
import Login from './components/Login';
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';

import axios from 'axios';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userAction';
import PostNewPlace from './components/places/PostNewPlace';

axios.defaults.baseURL = process.env.REACT_APP_PLACE_API_KEY;

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/place/:placeId" exact component={SinglePlace} />
              <Route path="/user/profile/:handle" exact component={User} />
              <Route path="/user/profile" exact component={Profile} />
              <Route path="/user/saved" exact component={Saved} />
              <Route
                path="/place/newpost/place"
                exact
                component={PostNewPlace}
              />
              <AuthRoute path="/login" exact component={Login} />
              <AuthRoute path="/signup" exact component={Signup} />
              <AuthRoute
                path="/resetpassword"
                exact
                component={ResetPassword}
              />
            </Switch>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
