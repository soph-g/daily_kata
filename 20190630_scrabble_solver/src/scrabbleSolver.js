function ScrabbleSolver(string) {
  this.string = string;
  this.onePoint = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'];
  return {
    score: () => {
      if (this.string.length == 0) {
        return 0;
      }
      if (this.onePoint.includes(this.string)) {
        return 1;
      }
      return 2
    }
  }
}

module.exports = ScrabbleSolver;
