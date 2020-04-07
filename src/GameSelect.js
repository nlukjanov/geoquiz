import React from 'react';
import { Link } from 'react-router-dom';

const GameSelect = () => {
  return (
    <div data-testid='game-select'>
      <Link data-testid='world' to='/world'>All World</Link>
      <Link data-testid='europe' to='/europe'>Europe</Link>
      <Link data-testid='asia-oceania' to='/asia-oceania'>Asia+Oceania</Link>
      <Link data-testid='africa' to='/africa'>Africa</Link>
      <Link data-testid='americas' to='/americas'>Americas</Link>
    </div>
  );
};

export default GameSelect;
