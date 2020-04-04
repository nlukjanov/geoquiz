import React from 'react';
import { Link } from 'react-router-dom';


const Intro = () => {
  return (
    <div>
      <h1>Geo Quiz!</h1>
      <Link to='/game-select'>Start New Game</Link>
    </div>
  );
};

export default Intro;
