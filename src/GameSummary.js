import React from 'react';
import { Link } from 'react-router-dom';

const GameSummary = (props) => {
  console.log(props);
  const { score, questionCount } = props.location.state;
  const answerRate = 100 * (score / questionCount).toFixed(2);
  return (
    <div data-testid='game-summary' className='game-summary'>
      <p data-testid='question-number'>You had {questionCount} questions</p>
      <p data-testid='score'>You guessed {score} flags</p>
      <p data-testid='answer-rate'>
        You guessed correctly {answerRate}% of flags
      </p>
      <Link to='/game-select'>
        <button>New Game?</button>
      </Link>
    </div>
  );
};

export default GameSummary;
