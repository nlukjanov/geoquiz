import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Europe from './Europe';

describe('<Europe />', () => {
  it('should render a component', () => {
    const { container, getByTestId } = render(
      <BrowserRouter>
        <Europe />
      </BrowserRouter>
    );
    expect(getByTestId('europe')).toBeTruthy;
    expect(container.firstChild).toMatchSnapshot();
  });

});
