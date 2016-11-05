import {GUESS_NUMBER_TRUE, guessNumberTrue, GUESS_NUMBER_FALSE, guessNumberFalse} from '../actions/index'
import {combineReducers} from 'redux'


const initialState = {isCorrect : 'number generated'};



const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GUESS_NUMBER_FALSE:
      return Object.assign({}, state, {
        name : action.guess,
        isCorrect : 'not the number'
      });
      break;
    case GUESS_NUMBER_TRUE:
      return Object.assign({}, state, {
        name : action.guess,
        isCorrect : 'got it!'
      });
      break;
    default:
      return state
  }
}

export default rootReducer;
