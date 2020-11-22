import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';

import Landing from './Landing';
import Search from './Search';
import UserResults from './UserResults';

import '../styles/App.css';

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/search" exact component={Search} />
          <Route path="/results" exact component={UserResults} />
        </Switch>
      </Router>

    </div>


  );
}

export default App;