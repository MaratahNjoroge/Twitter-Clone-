import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Main from './Components/Layout/Main'
import Home from './Components/Home'
import Register from './Components/Auth/register'
import Login from './Components/Auth/login'
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </Main>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;