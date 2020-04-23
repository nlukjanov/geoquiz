const utils = require('./utils');

describe('utility functions', () => {
  it('given empty array it should return empty array', () => {
    expect(utils.shuffleArray([])).toEqual([]);
  });

  it('should shuffle an array of numbers', () => {
    const arrayToShuffle = [1, 2, 3, 4, 5, 6];
    expect(utils.shuffleArray(arrayToShuffle)).not.toEqual(arrayToShuffle);
  });

  it('should shuffle an array of any elements', () => {
    const arrayToShuffle = [1, '2', { a: 'b' }, [1, 2, 3], 5, 6];
    expect(utils.shuffleArray(arrayToShuffle)).not.toEqual(arrayToShuffle);
  });

  it('should randomly pick one element from array', () => {
    const array = ['1','2','3'];
    expect(utils.getRandomCountry(array)).toMatch(/1|2|3/);
  });
});
