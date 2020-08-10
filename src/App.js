import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import FrontPage from './components/frontpage'
import Dashboard from './components/dashboard'
import Consultation from './components/consultation'
import Register from './components/register'
import Login from './components/login'
import RecoverPasswordOne from './components/recoverpassword1'
import RecoverPasswordTwo from './components/recoverpassword2'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route  path="/register" component={Register} />
          <Route  path="/login" component={Login} />
          <Route  path="/recoverpasswordone" component={RecoverPasswordOne} />
          <Route  path="/recoverpasswordtwo" component={RecoverPasswordTwo} />
          <Route  path="/dashboard" component={Dashboard} />
          <Route  path="/consult" component={Consultation} />
        </Switch>
        
      </div>
      </BrowserRouter>
    );
  }

}

export default App;
