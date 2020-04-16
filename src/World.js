import React from 'react';

import Question from './Question';

const World = () => {
  const url = 'https://restcountries.eu/rest/v2/all';
  return <Question url={url} />;
};

export default World;
