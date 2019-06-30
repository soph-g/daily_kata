const ScrabbleSolver = require('../src/scrabbleSolver');

describe('ScrabbleSolver', () => {
  let scrabbleSolver;
  describe('#score', () => {
    it('returns 0 when passed an empty string', () => {
      scrabbleSolver = new ScrabbleSolver('');
      expect(scrabbleSolver.score()).toEqual(0);
    });

    it('returns 1 when passed a', () => {
      scrabbleSolver = new ScrabbleSolver('a');
      expect(scrabbleSolver.score()).toEqual(1)
    });
  });
});
