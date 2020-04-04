import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Intro from './Intro';
import GameSelect from './GameSelect';

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path='/' component={Intro} />
          <Route exact path='/game-select' component={GameSelect} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
