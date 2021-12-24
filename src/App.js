import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

import Intro from './Intro';
import GameSelect from './GameSelect';
import GameSummary from './GameSummary';
import Game from './Game';

const apiUrl = 'https://restcountries.com/v2';

const App = () => {
  const world = `${apiUrl}/all`;
  const europe = `${apiUrl}/region/europe`;
  const asia = `${apiUrl}/region/asia`;
  const africa = `${apiUrl}/region/africa`;
  const americas = `${apiUrl}/region/americas`;

  return (
    <BrowserRouter>
      <main data-testid='main'>
        <Switch>
          <Route exact path='/' component={Intro} />
          <Route path='/game-select' component={GameSelect} />
          <Route
            path='/world'
            render={(props) => <Game {...props} url={world} />}
          />
          <Route
            path='/europe'
            render={(props) => <Game {...props} url={europe} />}
          />
          <Route
            path='/asia'
            render={(props) => <Game {...props} url={asia} />}
          />
          <Route
            path='/africa'
            render={(props) => <Game {...props} url={africa} />}
          />
          <Route
            path='/americas'
            render={(props) => <Game {...props} url={americas} />}
          />
          <Route path='/game-summary' component={GameSummary} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
