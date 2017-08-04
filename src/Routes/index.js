import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from '../App';

export default <Router>
  <div>
    <Route exact path="/" component={App}/>
    <Route path="/colors=:id" component={App}/>
  </div>
</Router>;
