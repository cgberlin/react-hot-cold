import {GENERATE_NUMBER, GUESS_NUMBER, guessNumber, generateNumber} from '../actions/index'
import {combineReducers} from 'redux'

const initialState = {};
/*
var hotColdReducer = function(state,action) {
  state = state || initialState;
  if (action.type === actions.generateNumber) {
    let randomNumber = (Math.random() * (100 - 1) + 1);
    return state.concat({
      name : action.number,
      generatedNumber : randomNumber
    });
  }
  else if (action.type === action.guessNumber) {
    var guessedNumber;
    if (guessNumber === state.generatedNumber){
      alert('correct!');
    }
    return state.concat({
      name : action.guess,
      guessedNumber : guessedNumber
    });
  }
  return state;
};
*/

function rootReducer (state = initialState, action) {
  switch (action.type) {
    case GENERATE_NUMBER:
      return {
      };
    default:
      return state
  }
}

combineReducers ({
  rootReducer
});

export default rootReducer;
