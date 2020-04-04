import React from 'react';
import { Link } from 'react-router-dom';

const GameSelect = () => {
  return (
    <div>
      <Link>Europe</Link>
      <Link>Asia+Oceania</Link>
      <Link>Africa</Link>
      <Link>Americas</Link>
      <Link>All World</Link>
    </div>
  );
};

export default GameSelect;
