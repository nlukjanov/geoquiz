import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div data-testid='intro'>
      <h1 className='title' data-testid='h1 title'>
        Geo Quiz!
      </h1>
      <Link to='/game-select' data-testid='link to new game'>
        <button className='start'>Start New Game</button>
      </Link>
    </div>
  );
};

export default Intro;
