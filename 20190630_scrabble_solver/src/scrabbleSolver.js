function ScrabbleSolver(string) {
  this.string = string;
  this.onePoint = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'];
  this.twoPoints = ['d', 'g'];
  this.threePoints = ['b', 'c', 'm', 'p']

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
      if (this.threePoints.includes(this.string)) {
        return 3
      }
      return 4
    }
  }
}

module.exports = ScrabbleSolver;
