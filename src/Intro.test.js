import React from 'react';
import { render } from '@testing-library/react';
import Intro from './Intro';

describe('<Intro />', () => {
  it('should render a component', () => {
    const { container } = render(<Intro />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
