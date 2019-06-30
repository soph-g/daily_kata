function ScrabbleSolver(string) {
  this.string = string;
  this.onePoint = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'];
  this.twoPoints = ['d', 'g'];

  return {
    score: () => {
      if (this.string.length == 0) {
        return 0;
      }
      if (this.onePoint.includes(this.string)) {
        return 1;
      }
      if (this.twoPoints.includes(this.string)) {
        return 2
      }
      return 3
    }
  }
}

module.exports = ScrabbleSolver;
