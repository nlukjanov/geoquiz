import React, { useState, useEffect } from 'react';
import axios from 'axios';

const World = () => {
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState({
    question: '',
    flag: '',
    answers: []
  });

  const getData = async () => {
    try {
      const response = await axios.get('https://restcountries.eu/rest/v2/all');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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

  return (
    <div>
      <h2>Guess the flag</h2>
      <img
        src={question.flag}
        style={{ width: '400px', height: '200px' }}
        alt='flag'
      />
      {question.answers.map((answer, index) => (
        <div key={index}>{answer}</div>
      ))}
    </div>
  );
};

export default World;
