var GUESS_NUMBER_FALSE = 'GUESS_NUMBER_FALSE';
var guessNumberFalse = function(guess, number) {
    return {
      type : GUESS_NUMBER_FALSE,
      guess : guess,
      number : number
    }
};

var GUESS_NUMBER_TRUE = 'GUESS_NUMBER_TRUE';
var guessNumberTrue = function(guess, number) {
    return {
      type : GUESS_NUMBER_TRUE,
      guess : guess,
      number : number
    }
};

export {
  GUESS_NUMBER_TRUE,
  GUESS_NUMBER_FALSE,
  guessNumberTrue,
  guessNumberFalse
}
