import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import GameSelect from './GameSelect';

describe('<GameSelect />', () => {
  it('should render a component', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <GameSelect />
      </BrowserRouter>
    );
    expect(getByTestId('game-select')).toBeInTheDocument();
  });

  it('should have a world button', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <GameSelect />
      </BrowserRouter>
    );
    expect(getByTestId('world')).toBeInTheDocument();
    expect(getByTestId('world').textContent).toEqual('World');
    expect(getByTestId('world').closest('a')).toHaveAttribute('href', '/world');
  });

  it('should have a europe button', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <GameSelect />
      </BrowserRouter>
    );
    expect(getByTestId('europe')).toBeInTheDocument();
    expect(getByTestId('europe').textContent).toEqual('Europe');
    expect(getByTestId('europe').closest('a')).toHaveAttribute(
      'href',
      '/europe'
    );
  });

  it('should have an asia button', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <GameSelect />
      </BrowserRouter>
    );
    expect(getByTestId('asia')).toBeInTheDocument();
    expect(getByTestId('asia').textContent).toEqual('Asia');
    expect(getByTestId('asia').closest('a')).toHaveAttribute('href', '/asia');
  });

  it('should have an africa button', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <GameSelect />
      </BrowserRouter>
    );
    expect(getByTestId('africa')).toBeInTheDocument();
    expect(getByTestId('africa').textContent).toEqual('Africa');
    expect(getByTestId('africa').closest('a')).toHaveAttribute(
      'href',
      '/africa'
    );
  });

  it('should have an americas button', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <GameSelect />
      </BrowserRouter>
    );
    expect(getByTestId('americas')).toBeInTheDocument();
    expect(getByTestId('americas').textContent).toEqual('Americas');
    expect(getByTestId('americas').closest('a')).toHaveAttribute(
      'href',
      '/americas'
    );
  });
});
