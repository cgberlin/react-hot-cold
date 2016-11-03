var GENERATE_NUMBER = 'GENERATE_NUMER';
var generateNumber = function(number) {
    return {
      type : GENERATE_NUMBER,
      number : number
    }
};

var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(guess, number) {
    return {
      type : GUESS_NUMBER,
      guess : guess,
      number : number
    }
};

export {
  GENERATE_NUMBER,
  GUESS_NUMBER,
  guessNumber,
  generateNumber
}

