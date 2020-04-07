import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should render a component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('intro')).toBeTruthy;
  });
});
