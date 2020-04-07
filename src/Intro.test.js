import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Intro from './Intro';

describe('<Intro />', () => {
  it('should render a component', () => {
    const { container, getByTestId } = render(
      <BrowserRouter>
        <Intro />
      </BrowserRouter>
    );
    expect(getByTestId('intro')).toBeTruthy;
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a h1 title', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Intro />
      </BrowserRouter>
    );
    // const title = getByTestId('h1 title');
    expect(getByTestId('h1 title')).toBeTruthy;
    expect(getByTestId('h1 title').textContent).toEqual('Geo Quiz!');
  });

  it('should have a button to start new game', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Intro />
      </BrowserRouter>
    );
    expect(getByTestId('link to new game').closest('a')).toHaveAttribute('href', '/game-select');
    expect(getByTestId('link to new game')).toBeTruthy;
    expect(getByTestId('link to new game').textContent).toEqual('Start New Game');
  });
});
