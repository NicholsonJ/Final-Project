import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Spaces from './pages/Spaces';
import AddSpace from './pages/AddSpace';
import Secret from './pages/Secret';
import Login from './pages/Login';
import Signup from './pages/Signup';
import api from '../api';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spaces: []
    };
    // api.loadUser();
  }

  handleLogoutClick(e) {
    api.logout();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Spaces</h1>
          <Link to="/">Home</Link>
          <Link to="/spaces">Spaces</Link>
          <Link to="/add-space">Add Space</Link>
          {!api.isLoggedIn() && <Link to="/signup">Signup</Link>}
          {!api.isLoggedIn() && <Link to="/login">Login</Link>}
          {api.isLoggedIn() && (
            <Link to="/" onClick={e => this.handleLogoutClick(e)}>
              Logout
            </Link>
          )}
          <Link to="/secret">Secret</Link>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/spaces" component={Spaces} />
          <Route path="/add-space" component={AddSpace} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}

export default App;
