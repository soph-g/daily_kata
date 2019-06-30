function ScrabbleSolver(string) {
  this.string = string;
  this.points = {
    a: 1,
    e: 1,
    i: 1,
    l: 1,
    n: 1,
    o: 1,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 8,
    x: 8,
    q: 10,
    z: 10
  }

  return {
    score: () => {
      score = 0;
      if (this.string.length == 0) {
        return score;
      }
      this.string.split('').forEach((letter) => {
        score += this.points[letter]
      })
      return score;
    }
  }
}

module.exports = ScrabbleSolver;
