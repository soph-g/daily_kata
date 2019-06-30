const ScrabbleSolver = require('../src/scrabbleSolver');

describe('ScrabbleSolver', () => {
  let scrabbleSolver;
  describe('#score', () => {
    describe('zero score strings', () => {
      test('empty string', () => {
        scrabbleSolver = new ScrabbleSolver('');
        expect(scrabbleSolver.score()).toEqual(0);
      });
    });

    describe('1 point letters', () => {
      test('a', () => {
        scrabbleSolver = new ScrabbleSolver('a');
        expect(scrabbleSolver.score()).toEqual(1)
      });
      test('e', () => {
        scrabbleSolver = new ScrabbleSolver('e');
        expect(scrabbleSolver.score()).toEqual(1)
      });
      test('i', () => {
        scrabbleSolver = new ScrabbleSolver('i');
        expect(scrabbleSolver.score()).toEqual(1)
      });
      test('o', () => {
        scrabbleSolver = new ScrabbleSolver('o');
        expect(scrabbleSolver.score()).toEqual(1)
      });
      test('u', () => {
        scrabbleSolver = new ScrabbleSolver('u');
        expect(scrabbleSolver.score()).toEqual(1)
      });
      test('l', () => {
        scrabbleSolver = new ScrabbleSolver('l');
        expect(scrabbleSolver.score()).toEqual(1)
      });
      test('n', () => {
        scrabbleSolver = new ScrabbleSolver('n');
        expect(scrabbleSolver.score()).toEqual(1)
      });
      test('r', () => {
        scrabbleSolver = new ScrabbleSolver('r');
        expect(scrabbleSolver.score()).toEqual(1)
      });
      test('s', () => {
        scrabbleSolver = new ScrabbleSolver('s');
        expect(scrabbleSolver.score()).toEqual(1)
      });
      test('t', () => {
        scrabbleSolver = new ScrabbleSolver('t');
        expect(scrabbleSolver.score()).toEqual(1)
      });
    });
  });
});
