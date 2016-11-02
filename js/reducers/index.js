var actions = require('../actions/index');
import store from '../store'
var combineReducers = require('redux').combineReducers;

var initialState = {};

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

combineReducers ({
  hotColdReducer
});

exports.hotColdReducer = hotColdReducer;
