var GENERATE_NUMER = 'GENERATE_NUMER';
var generateNumber = function(number) {
    return {
      type : GENERATE_NUMER,
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


exports.GENERATE_NUMER = GENERATE_NUMER;
exports.generateNumber = generateNumber;
exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
