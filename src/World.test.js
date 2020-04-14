import React from 'react';
import { render, wait } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import axiosMock from 'axios';

import World from './World';

jest.mock('axios', () => {
  return {
    get: jest.fn(() =>
      Promise.resolve({ response: { data: ['country1', 'country2'] } })
    )
  };
});

describe('World component', () => {
  it('should render a page with h2 title, img and answers block', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <World />
      </BrowserRouter>
    );
    expect(getByTestId(/h2 title/i).textContent).toBe('Guess the flag');
    expect(getByTestId(/flag image/i)).toHaveAttribute('src', '');
    getByTestId(/answers block/i);
    axiosMock.get.mockResolvedValueOnce({ data: ['country1', 'country2'] });
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(
      'https://restcountries.eu/rest/v2/all'
    );
  });
});

// import { getPeople } from "./getPeople";
// jest.mock('./getPeople')

// test('skeleton of a test', async () => {
//   const people = [/* Put some mock people in here */]
//   getPeople.mockResolvedValueOnce({ results: people })
//   render(<App />)

//   expect(/* Somehow get the loading spinner */).toBeInTheDocument()

//   await wait(() => expect(/* Here you check that the people is on the page */).toBeInTheDocument())

//   // We also check that the API gets called
//   expect(getPeople).toHaveBeenCalledOnce()
//   expect(getPeople).toHaveBeenCalledWith()
// })
