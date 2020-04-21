import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import GameSummary from './GameSummary';

describe('<GameSummary />', () => {
  it('should render a component', () => {
    const props = { location: { state: { score: 5, questionCount: 10 } } };
    const { getByTestId } = render(
      <BrowserRouter>
        <GameSummary {...props} />
      </BrowserRouter>
    );
    expect(getByTestId('game-summary')).toBeInTheDocument();
    expect(getByTestId('question-number')).toBeInTheDocument();
    expect(getByTestId('score')).toBeInTheDocument();
    expect(getByTestId('answer-rate')).toBeInTheDocument();
  });
});
