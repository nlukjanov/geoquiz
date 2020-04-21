import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Game from './Game';

describe('<Game />', () => {

  it('should render a component', () => {
    const world = 'https://restcountries.eu/rest/v2/all';

    const { getByTestId } = render(
      <BrowserRouter>
        <Game url={world} />
      </BrowserRouter>
    );
    expect(getByTestId('game')).toBeInTheDocument();
    expect(getByTestId('h2 title')).toBeInTheDocument();
    expect(getByTestId('flag image')).toBeInTheDocument();
    expect(getByTestId('answers container')).toBeInTheDocument();
  });

  it('should render answers', async () => {
    const world = 'https://restcountries.eu/rest/v2/all';

    const { getByTestId } = render(
      <BrowserRouter>
        <Game url={world} />
      </BrowserRouter>
    );
    await waitFor(() => [
      expect(getByTestId(/button 0/i)).toBeInTheDocument(),
      expect(getByTestId(/button 1/i)).toBeInTheDocument(),
      expect(getByTestId(/button 2/i)).toBeInTheDocument(),
      expect(getByTestId(/button 3/i)).toBeInTheDocument()
    ]);
  });
});
