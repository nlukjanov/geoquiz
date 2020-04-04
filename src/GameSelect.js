import React from 'react';
import { Link } from 'react-router-dom';

const GameSelect = () => {
  return (
    <div>
      <Link to='/world'>All World</Link>
      <Link to='/europe'>Europe</Link>
      <Link to='/asia-oceania'>Asia+Oceania</Link>
      <Link to='/africa'>Africa</Link>
      <Link to='/americas'>Americas</Link>
    </div>
  );
};

export default GameSelect;
