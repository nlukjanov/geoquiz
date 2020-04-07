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
    expect(getByTestId('game-select')).toBeTruthy;
  });

  it('should have a world button', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <GameSelect />
      </BrowserRouter>
    );
    expect(getByTestId('world')).toBeTruthy;
    expect(getByTestId('world').textContent).toEqual('All World');
    expect(getByTestId('world').closest('a')).toHaveAttribute('href', '/world');
  });

  it('should have a europe button', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <GameSelect />
      </BrowserRouter>
    );
    expect(getByTestId('europe')).toBeTruthy;
    expect(getByTestId('europe').textContent).toEqual('Europe');
    expect(getByTestId('europe').closest('a')).toHaveAttribute('href', '/europe');
  });

  it('should have a world button', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <GameSelect />
      </BrowserRouter>
    );
    expect(getByTestId('asia-oceania')).toBeTruthy;
    expect(getByTestId('asia-oceania').textContent).toEqual('Asia+Oceania');
    expect(getByTestId('asia-oceania').closest('a')).toHaveAttribute('href', '/asia-oceania');
  });

  it('should have a africa button', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <GameSelect />
      </BrowserRouter>
    );
    expect(getByTestId('africa')).toBeTruthy;
    expect(getByTestId('africa').textContent).toEqual('Africa');
    expect(getByTestId('africa').closest('a')).toHaveAttribute('href', '/africa');
  });

  it('should have a americas button', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <GameSelect />
      </BrowserRouter>
    );
    expect(getByTestId('americas')).toBeTruthy;
    expect(getByTestId('americas').textContent).toEqual('Americas');
    expect(getByTestId('americas').closest('a')).toHaveAttribute('href', '/americas');
  });
});
