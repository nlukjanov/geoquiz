import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
const utils = require('./utils/utils');

const Game = ({ url, questionLimit }) => {
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState({
    flag: '',
    correctAnswer: '',
    answers: []
  });
  
  const totalNumberOfQuestions = questionLimit || 11;

  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(1);
  const [guess, setGuess] = useState('');
  const [answered, setAnswered] = useState(false);
  const [clickedButton, setClickedButton] = useState('');

  useEffect(() => {
    let mounted = true;

    const getData = async () => {
      try {
        const response = await axios.get(url);
        if (mounted && response) {
          setData(response.data);
        }
      } catch (error) {
        console.log('Something went wrong with api request', error);
      }
    };
    getData();
    return () => {
      mounted = false;
    };
  }, [url]);

  useEffect(() => {
    if (data.length !== 0) {
      makeQuestion(data);
    }
  }, [data]);

  const makeQuestion = (data) => {
    const questionCountry = utils.getRandomCountry(data);
    const flag = questionCountry.flag;
    const correctAnswer = questionCountry.name;
    const excludeQuestionCountry = data.filter((country) => {
      return country !== questionCountry;
    });
    const getWrongAnswers = (sourceArray, neededElements) => {
      const result = [];
      for (let i = 0; i < neededElements; i++) {
        const index = Math.floor(Math.random() * sourceArray.length);
        result.push(sourceArray[index].name);
        sourceArray.splice(index, 1);
      }
      return result;
    };
    const answers = [
      ...getWrongAnswers(excludeQuestionCountry, 3),
      correctAnswer
    ];
    setQuestion({
      flag,
      correctAnswer,
      answers: utils.shuffleArray(answers)
    });
  };

  const handleAnswerClick = (e) => {
    setClickedButton(e.target.id);
    setAnswered(true);
    if (e.target.textContent === question.correctAnswer) {
      setScore(score + 1);
      setGuess('Correct');
    } else {
      setGuess('Incorrect');
    }
  };

  const handleNextQuestion = () => {
    setQuestionCount(questionCount + 1);
    setAnswered(false);
    setGuess('');
    makeQuestion(data);
  };

  if (questionCount === totalNumberOfQuestions) {
    return (
      <Redirect
        to={{
          pathname: '/game-summary',
          state: { score: score, questionCount: questionCount - 1 }
        }}
      />
    );
  }

  if (!data.length) {
    return (
      <div data-testid='error'>
        <p>The page is loading.</p>
        <p>Wait a little bit.</p>
        <p>If you see this message too long, try to refresh the page.</p>
      </div>
    );
  }

  return (
    <div data-testid='game' className='game'>
      <h2 data-testid='h2 title'>Guess the flag</h2>
      <div className='info'>
        <h2 data-testid='score'>Score: {score}</h2>
        <h2 data-testid='question-count'>Question: {questionCount}</h2>
      </div>
      <img data-testid='flag image' src={question.flag} alt='flag' />
      <div data-testid='answers container'>
        {question.answers.map((answer, index) => (
          <button
            id={answer}
            className={`${
              (answered && answer === question.correctAnswer
                ? 'correct'
                : '') || (answered && answer === clickedButton ? 'wrong' : '')
            }`}
            data-testid={`button ${index}`}
            onClick={handleAnswerClick}
            key={index}
            disabled={answered}
          >
            {answer}
          </button>
        ))}
      </div>
      {guess && (
        <div data-testid='guess-result' className='answer'>
          {guess === 'Correct' ? (
            <p data-testid='guess-answer-message'>You got it!</p>
          ) : (
            <p data-testid='guess-answer-message'>You will get it next time!</p>
          )}
          <div>
            <Link
              to={{
                pathname: '/game-summary',
                state: { score: score, questionCount: questionCount }
              }}
            >
              <button data-testid='finish-game'>Finish Game</button>
            </Link>
            <button data-testid='next-question' onClick={handleNextQuestion}>Next Question</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
