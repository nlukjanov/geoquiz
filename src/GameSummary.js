import React from 'react';
import { Link } from 'react-router-dom';

const GameSummary = (props) => {
  const { score, questionCount } = props.location.state;
  const answerRate = 100 * (score / questionCount).toFixed(2);
  return (
    <>
      <div>You had {questionCount} questions</div>
      <div>You guessed {score} flags</div>
      <div>You guessed correctly {answerRate}% of flags</div>
      <Link to='/game-select'>New Game?</Link>
    </>
  );
};

export default GameSummary;
