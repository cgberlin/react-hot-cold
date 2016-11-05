import {GENERATE_NUMBER, GUESS_NUMBER, guessNumber, generateNumber} from '../actions/index'
import {combineReducers} from 'redux'
import {random} from 'redux-effects-random'

const initialState = {};

var randomNumber = random();

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_NUMBER:
      return state.concat({
        name : action.number,
        generatedNumber : randomNumber
      });
      break;
    case GUESS_NUMBER:
      return Object.assign({}, state, {
        name : action.guess,
        isCorrect : 'true'
      });
      break;
    default:
      return state
  }
}

export default rootReducer;
