import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './components/navigation/navbar';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Compiled from './components/Compiled/Compiled';
import Contacts from './containers/contacts/contacts';
import About from './containers/about/about';
import Footer from './containers/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/" component={Compiled} />
          <Compiled />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
