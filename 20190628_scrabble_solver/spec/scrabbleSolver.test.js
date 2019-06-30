const ScrabbleSolver = require('../src/scrabbleSolver')

describe('ScrabbleSolver', () => {
  let scrabbleSolver
  describe('Passing an empty string', () => {
    test('it returns 0', () => {
      scrabbleSolver = new ScrabbleSolver('')
      expect(scrabbleSolver.score()).toEqual(0)
    });
  });

  describe('passing a single character', () => {
    test('a', () => {
      scrabbleSolver = new ScrabbleSolver('a')
      expect(scrabbleSolver.score()).toEqual(1)
    });
  });
});
