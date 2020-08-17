import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import jwtDecode from 'jwt-decode';

import Navbar from './components/Navbar';
import AuthRoute from './util/AuthRoute';
import Home from './views/Home/Home';
import SinglePlace from './components/places/SinglePlace';
import Profile from './components/profile/Profile';

import Saved from './views/User/Saved';
import User from './views/User/User';
import Login from './views/AuthPage/Login';
import Signup from './views/AuthPage/Signup';
import ResetPassword from './views/AuthPage/ResetPassword';
import Other from './views/Items/Other';
import Sale from './views/Items/Sale';
import Rental from './views/Items/Rental';
import All from './views/Items/All';

import PostNewPlace from './views/Post/PostNewPlace';
import EditPlace from './views/Post/EditPlace';

import ScrollMemory from 'react-router-scroll-memory';
import axios from 'axios';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userAction';

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
          <ScrollMemory />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route
                path="/place/newpost/place"
                exact
                component={PostNewPlace}
              />
              <Route path="/place/edit/:placeId" exact component={EditPlace} />
              <Route path="/user/profile" exact component={Profile} />
              <Route path="/user/saved" exact component={Saved} />
              <Route path="/user/profile/:handle" exact component={User} />
              <Route path="/all" exact component={All} />
              <Route path="/rental" exact component={Rental} />
              <Route path="/sale" exact component={Sale} />
              <Route path="/other" exact component={Other} />
              <Route path="/place/:placeId" exact component={SinglePlace} />
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
