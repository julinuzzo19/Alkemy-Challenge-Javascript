import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Register from './components/registerComponent/register';
import Login from './components/loginComponent/login';
import Home from './components/homeComponent/home';

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </div>
    );
  }
}
