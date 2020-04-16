import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Intro from './Intro';
import GameSelect from './GameSelect';
import Europe from './Europe';
import World from './World';
import GameSummary from './GameSummary';


const App = () => {
  return (
    <BrowserRouter>
      <main data-testid='main'>
        <Switch>
          <Route exact path='/' component={Intro} />
          <Route path='/game-select' component={GameSelect} />
          <Route path='/europe' component={Europe} />
          <Route path='/world' component={World} />
          <Route path='/gamesummary' component={GameSummary} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
