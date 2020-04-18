import React from 'react';
import { Link } from 'react-router-dom';

const GameSelect = () => {
  return (
    <div className='game-select' data-testid='game-select'>
      <Link data-testid='world' to='/world'><button>World</button></Link>
      <Link data-testid='europe' to='/europe'><button>Europe</button></Link>
      <Link data-testid='asia' to='/asia'><button>Asia</button></Link>
      <Link data-testid='africa' to='/africa'><button>Africa</button></Link>
      <Link data-testid='americas' to='/americas'><button>Americas</button></Link>
    </div>
  );
};

export default GameSelect;
