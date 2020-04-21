import React from 'react';
import { render, waitFor, debug, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axiosMock from 'axios';
import Game from './Game';

afterEach(cleanup);

jest.mock('axios');

const countries = [
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
  },
  {
    flag: 'flag4',
    name: 'country4'
  },
  {
    flag: 'flag5',
    name: 'country5'
  },
  {
    flag: 'flag6',
    name: 'country6'
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
  });

  it('should render error if there is no data', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Game />
      </BrowserRouter>
    );
    expect(getByTestId('error')).toBeInTheDocument();
  });
});
