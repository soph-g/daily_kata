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
    describe('2 point letters', () => {
      test('d', () => {
        scrabbleSolver = new ScrabbleSolver('d');
        expect(scrabbleSolver.score()).toEqual(2);
      });
      test('g', () => {
        scrabbleSolver = new ScrabbleSolver('g');
        expect(scrabbleSolver.score()).toEqual(2);
      });
    });
    describe('3 point letters', () => {
      test('b', () => {
        scrabbleSolver = new ScrabbleSolver('b');
        expect(scrabbleSolver.score()).toEqual(3);
      });
      test('c', () => {
        scrabbleSolver = new ScrabbleSolver('c');
        expect(scrabbleSolver.score()).toEqual(3);
      });
      test('m', () => {
        scrabbleSolver = new ScrabbleSolver('m');
        expect(scrabbleSolver.score()).toEqual(3);
      });
      test('p', () => {
        scrabbleSolver = new ScrabbleSolver('p');
        expect(scrabbleSolver.score()).toEqual(3);
      });
    });
    describe('4 point letters', () => {
      test('f', () => {
        scrabbleSolver = new ScrabbleSolver('f');
        expect(scrabbleSolver.score()).toEqual(4);
      });
      test('h', () => {
        scrabbleSolver = new ScrabbleSolver('h');
        expect(scrabbleSolver.score()).toEqual(4);
      });
      test('v', () => {
        scrabbleSolver = new ScrabbleSolver('v');
        expect(scrabbleSolver.score()).toEqual(4);
      });
      test('w', () => {
        scrabbleSolver = new ScrabbleSolver('w');
        expect(scrabbleSolver.score()).toEqual(4);
      });
      test('y', () => {
        scrabbleSolver = new ScrabbleSolver('y');
        expect(scrabbleSolver.score()).toEqual(4);
      });
    });
    describe('5 point letters', () => {
      test('k', () => {
        scrabbleSolver = new ScrabbleSolver('k');
        expect(scrabbleSolver.score()).toEqual(5);
      });
    });
    describe('8 point letters', () => {
      test('j', () => {
        scrabbleSolver = new ScrabbleSolver('j');
        expect(scrabbleSolver.score()).toEqual(8);
      });
      test('x', () => {
        scrabbleSolver = new ScrabbleSolver('x');
        expect(scrabbleSolver.score()).toEqual(8);
      });
    });
    describe('10 point letters', () => {
      test('q', () => {
        scrabbleSolver = new ScrabbleSolver('q');
        expect(scrabbleSolver.score()).toEqual(10);
      });
      test('z', () => {
        scrabbleSolver = new ScrabbleSolver('z');
        expect(scrabbleSolver.score()).toEqual(10);
      });
    });

    describe('multiple letters', () => {
      test('street', () => {
        scrabbleSolver = new ScrabbleSolver('street')
        expect(scrabbleSolver.score()).toEqual(6)
      });
      test('quirky', () => {
        scrabbleSolver = new ScrabbleSolver('quirky')
        expect(scrabbleSolver.score()).toEqual(22)
      });
    });
  });
});
