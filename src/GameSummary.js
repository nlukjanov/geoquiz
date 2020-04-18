import React from 'react';
import { Link } from 'react-router-dom';

const GameSummary = (props) => {
  const { score, questionCount } = props.location.state;
  const answerRate = 100 * (score / questionCount).toFixed(2);
  return (
    <div className='game-summary'>
      <p>You had {questionCount} questions</p>
      <p>You guessed {score} flags</p>
      <p>You guessed correctly {answerRate}% of flags</p>
      <Link to='/game-select'><button>New Game?</button></Link>
    </div>
  );
};

export default GameSummary;
