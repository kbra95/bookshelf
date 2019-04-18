import *as React from 'react';
import *as ReactDOM from 'react-dom';
import App from './containers/App';
import Details from './components/Details';
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
const routing = (
  <Router>
    <Switch>
      <Route exact path='/' component ={App}/>
      <Route path='/create' component ={App}/>
      <Route path='/:id' component={Details}/>
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('app') as HTMLElement);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
