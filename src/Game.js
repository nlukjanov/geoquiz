import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const Game = ({ url }) => {
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState({
    flag: '',
    correctAnswer: '',
    answers: []
  });

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
        if (mounted) {
          console.log(response);
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => {
      mounted = false;
    };
  }, [url]);

  useEffect(() => {
    if (data.length !== 0) {
      makeQuestion();
    }
  }, [data]);

  const makeQuestion = () => {
    const questionCountry = data[Math.floor(Math.random() * data.length)];
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
      answers: shuffleArray(answers)
    });
  };

  const shuffleArray = (array) => {
    const newArray = [];
    while (array.length) {
      const randomIndex = Math.floor(Math.random() * array.length),
        element = array.splice(randomIndex, 1);
      newArray.push(element[0]);
    }
    return newArray;
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
    makeQuestion();
  };

  if (questionCount === 10) {
    return (
      <Redirect
        to={{
          pathname: '/game-summary',
          state: { score: score, questionCount: questionCount }
        }}
      >
        Finish Game
      </Redirect>
    );
  }

  return (
    <div data-testid='game' className='game'>
      <h2 data-testid='h2 title'>Guess the flag</h2>
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
        <div className='answer'>
          {guess === 'Correct' ? (
            <p>You got it!</p>
          ) : (
            <p>You will get it next time!</p>
          )}
          <div>
            <Link
              to={{
                pathname: '/game-summary',
                state: { score: score, questionCount: questionCount }
              }}
            >
              <button>Finish Game</button>
            </Link>
            <button onClick={handleNextQuestion}>Next Question</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
