import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import World from './World';

describe('World component', () => {

  const question = {
    flag: '',
    correctAnswer: '',
    answers: []
  };

  it('should render an h2 title', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <World />
      </BrowserRouter>
    );
    expect(getByTestId(/h2 title/i)).toBeTruthy;
  });

  it('should render an img tag with flag', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <World />
      </BrowserRouter>
    );
    expect(getByTestId(/flag image/i)).toBeTruthy;
  });

  it('should render an img tag with flag', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <World />
      </BrowserRouter>
    );
    expect(getByTestId(/flag image/i)).toBeTruthy;
  });

  it('should render a div with answers block', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <World />
      </BrowserRouter>
    );
    expect(getByTestId(/answers block/i)).toBeTruthy;
  });

  it('should render answer buttons', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <World />
      </BrowserRouter>
    );
    expect(getByTestId(/button 1/i)).toBeTruthy;
    expect(getByTestId(/button 2/i)).toBeTruthy;
    expect(getByTestId(/button 3/i)).toBeTruthy;
    expect(getByTestId(/button 4/i)).toBeTruthy;
  });
});
