import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axiosMock from 'axios';
import Game from './Game';
import TestingRouter from './TestingRouter';

jest.mock('axios');
jest.mock('./utils/utils', () => {
  return {
    shuffleArray: jest.fn(() => [
      'country0',
      'country1',
      'country2',
      'country3'
    ]),
    getRandomCountry: jest.fn(() => {
      return {
        name: 'country0',
        flag: 'flag0'
      };
    })
  };
});

const countries = [
  {
    flag: 'flag0',
    name: 'country0'
  },
  {
    flag: 'flag1',
    name: 'country1'
  },
  {
    flag: 'flag2',
    name: 'country2'
  },
  {
    flag: 'flag3',
    name: 'country3'
  }
];

describe('<Game />', () => {
  it('should render component with answers', async () => {
    const url = '/some-url';
    axiosMock.get.mockResolvedValueOnce({
      data: countries
    });

    const { getByTestId } = render(
      <BrowserRouter>
        <Game url={url} />
      </BrowserRouter>
    );
    await waitFor(() => expect(axiosMock.get).toHaveBeenCalled());
    expect(axiosMock.get).toHaveBeenCalledWith(url);
    expect(getByTestId('game')).toBeInTheDocument();
    expect(getByTestId('h2 title')).toBeInTheDocument();
    expect(getByTestId('flag image')).toBeInTheDocument();
    expect(getByTestId('answers container')).toBeInTheDocument();
    expect(getByTestId('score')).toHaveTextContent('Score: 0');
    expect(getByTestId('question-count')).toHaveTextContent('Question: 1');
    expect(getByTestId(/button 0/i)).toHaveTextContent('country');
    expect(getByTestId(/button 1/i)).toHaveTextContent('country');
    expect(getByTestId(/button 2/i)).toHaveTextContent('country');
    expect(getByTestId(/button 3/i)).toHaveTextContent('country');
  });

  it('should render error if there is no data', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Game />
      </BrowserRouter>
    );
    expect(getByTestId('error')).toBeInTheDocument();
  });

  it('should handle clicking a correct answer', async () => {
    const url = '/some-url';
    axiosMock.get.mockResolvedValueOnce({
      data: countries
    });

    const { getByTestId } = render(
      <BrowserRouter>
        <Game url={url} />
      </BrowserRouter>
    );

    await waitFor(() => expect(getByTestId('button 0')).toBeInTheDocument());
    const correctAnswer = getByTestId('button 0');
    expect(getByTestId('score')).toHaveTextContent('Score: 0');
    expect(getByTestId('question-count')).toHaveTextContent('Question: 1');
    fireEvent.click(correctAnswer);
    await waitFor(() =>
      expect(getByTestId('correct-answer-message')).toHaveTextContent(
        'You got it!'
      )
    );
    expect(getByTestId('score')).toHaveTextContent('Score: 1');
    expect(getByTestId('question-count')).toHaveTextContent('Question: 1');
    expect(getByTestId('guess-result')).toBeInTheDocument();
  });

  it('should handle clicking a wrong answer', async () => {
    const url = '/some-url';
    axiosMock.get.mockResolvedValueOnce({
      data: countries
    });

    const { getByTestId } = render(
      <BrowserRouter>
        <Game url={url} />
      </BrowserRouter>
    );

    await waitFor(() => expect(getByTestId('button 1')).toBeInTheDocument());

    const wrongAnswer = getByTestId('button 1');
    expect(getByTestId('score')).toHaveTextContent('Score: 0');
    expect(getByTestId('question-count')).toHaveTextContent('Question: 1');
    fireEvent.click(wrongAnswer);
    await waitFor(() =>
      expect(getByTestId('wrong-answer-message')).toHaveTextContent(
        'You will get it next time!'
      )
    );
    expect(getByTestId('score')).toHaveTextContent('Score: 0');
    expect(getByTestId('question-count')).toHaveTextContent('Question: 1');
    expect(getByTestId('guess-result')).toBeInTheDocument();
  });

  it('should handle clicking next before question limit', async () => {
    const url = '/some-url';
    axiosMock.get.mockResolvedValueOnce({
      data: countries
    });

    const { getByTestId, queryByTestId } = render(
      <BrowserRouter>
        <Game url={url} />
      </BrowserRouter>
    );

    await waitFor(() => expect(getByTestId('button 0')).toBeInTheDocument());
    expect(queryByTestId('next-question')).not.toBeInTheDocument();
    const correctAnswer = getByTestId('button 0');
    fireEvent.click(correctAnswer);
    await waitFor(() =>
      expect(getByTestId('correct-answer-message')).toBeInTheDocument()
    );
    const nextQuestion = getByTestId('next-question');
    fireEvent.click(nextQuestion);
    expect(getByTestId('question-count')).toHaveTextContent('Question: 2');
  });

  it('should redirect to game summary when question limit reached and you click next question', async () => {
    const url = '/some-url';
    axiosMock.get.mockResolvedValueOnce({
      data: countries
    });

    const questionLimit = 2;
    const redirectUrl = '/game-summary';

    const { getByTestId, container } = render(
      <TestingRouter
        ComponentWithRedirection={() => (
          <Game url={url} questionLimit={questionLimit} />
        )}
        RedirectUrl={redirectUrl}
      />
    );

    await waitFor(() => expect(getByTestId('button 0')).toBeInTheDocument());
    const correctAnswer = getByTestId('button 0');
    fireEvent.click(correctAnswer);
    const nextQuestion = getByTestId('next-question');
    fireEvent.click(nextQuestion);
    expect(container.innerHTML).toEqual(expect.stringContaining(redirectUrl));
  });
});
