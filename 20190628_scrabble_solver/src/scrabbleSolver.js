function ScrabbleSolver(string) {
  this.string = string

  return {
    score: () => {
      if (this.string === '') {
        return 0
      }
      return 1
    }
  }
}

module.exports = ScrabbleSolver
