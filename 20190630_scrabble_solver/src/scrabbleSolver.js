function ScrabbleSolver(string) {
  this.string = string;
  return {
    score: () => {
      if (this.string.length == 0) {
        return 0;
      }
      return 1;
    }
  }
}

module.exports = ScrabbleSolver;
