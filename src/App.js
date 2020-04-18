import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

import Intro from './Intro';
import GameSelect from './GameSelect';
import GameSummary from './GameSummary';
import Game from './Game';


const App = () => {
  const world = 'https://restcountries.eu/rest/v2/all';
  const europe = 'https://restcountries.eu/rest/v2/region/europe';
  const asia = 'https://restcountries.eu/rest/v2/region/asia';
  const africa = 'https://restcountries.eu/rest/v2/region/africa';
  const americas = 'https://restcountries.eu/rest/v2/region/americas';

  return (
    <BrowserRouter>
      <main data-testid='main'>
        <Switch>
          <Route exact path='/' component={Intro} />
          <Route path='/game-select' component={GameSelect} />
          <Route path='/world' render={(props) => <Game {...props} url={world}/>} />
          <Route path='/europe' render={(props) => <Game {...props} url={europe}/>} />
          <Route path='/asia' render={(props) => <Game {...props} url={asia}/>} />
          <Route path='/africa' render={(props) => <Game {...props} url={africa}/>} />
          <Route path='/americas' render={(props) => <Game {...props} url={americas}/>} />
          <Route path='/game-summary' component={GameSummary} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
