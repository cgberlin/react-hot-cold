import fetch from 'isomorphic-fetch'

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

var LOWEST_GUESS_FETCH = "LOWEST_GUESS_FETCH";
var lowestGuessFetch = (lowestGuess) => {
  console.log(lowestGuess);
  return {
      type : LOWEST_GUESS_FETCH,
      lowestGuess : lowestGuess
  };
};

var getLowestGuess = () => {
  return function(dispatch) {
      let url = '/lowest-guesses';
      return fetch('/fewest-guesses').then(function(response) {
                return response.json();
            })
            .then(function(data) {
                var lowestGuessIs = data.lowestGuess;
                return dispatch(
                  lowestGuessFetch(lowestGuessIs)
                );
            });
      };
};

export {
  getLowestGuess,
  LOWEST_GUESS_FETCH,
  lowestGuessFetch,
  GUESS_NUMBER_TRUE,
  GUESS_NUMBER_FALSE,
  guessNumberTrue,
  guessNumberFalse
}
