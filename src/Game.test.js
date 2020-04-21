import React from 'react';
import { render, waitFor, debug } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axiosMock from 'axios';
import Game from './Game';

jest.mock('axios', () => {
  return {
    get: jest.fn(() =>
      Promise.resolve({
        data: [
          {
            flag: 'some flag',
            name: 'some name'
          },
          {
            flag: 'some flag',
            name: 'some name'
          },
          {
            flag: 'some flag',
            name: 'some name'
          },
          {
            flag: 'some flag',
            name: 'some name'
          },
          {
            flag: 'some flag',
            name: 'some name'
          },
          {
            flag: 'some flag',
            name: 'some name'
          },
          {
            flag: 'some flag',
            name: 'some name'
          }
        ]
      })
    )
  };
});

describe('<Game />', () => {
  it('should render a component', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Game />
      </BrowserRouter>
    );

    expect(getByTestId('game')).toBeInTheDocument();
    expect(getByTestId('h2 title')).toBeInTheDocument();
    expect(getByTestId('flag image')).toBeInTheDocument();
    expect(getByTestId('answers container')).toBeInTheDocument();
  });

  it('should render answers', async () => {
    const url = '/some-url';

    const { getByTestId } = render(
      <BrowserRouter>
        <Game url={url} />
      </BrowserRouter>
    );

    const countries = [
      {
        flag: 'some flag',
        name: 'some name'
      },
      {
        flag: 'some flag',
        name: 'some name'
      },
      {
        flag: 'some flag',
        name: 'some name'
      },
      {
        flag: 'some flag',
        name: 'some name'
      },
      {
        flag: 'some flag',
        name: 'some name'
      },
      {
        flag: 'some flag',
        name: 'some name'
      },
      {
        flag: 'some flag',
        name: 'some name'
      }
    ];
    const response = { data: countries };

    await waitFor(() => [
      expect(axiosMock.get).toHaveBeenCalled(),
      expect(axiosMock.get).toHaveBeenCalledWith(url)
    ]);
    // await waitFor(() => [
    //   expect(axiosMock.get.mockResolvedValue((response))).toHaveBeenCalled(),
    //   expect(getByTestId(/button 1/i)).toBeInTheDocument(),
    //   expect(getByTestId(/button 2/i)).toBeInTheDocument(),
    //   expect(getByTestId(/button 3/i)).toBeInTheDocument()
    // ]);
  });
});
