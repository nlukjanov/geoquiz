import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          {/* <Route exact path='/' component={Intro} /> */}
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
