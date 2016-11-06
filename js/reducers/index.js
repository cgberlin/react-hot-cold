import {GUESS_NUMBER_TRUE, guessNumberTrue, GUESS_NUMBER_FALSE, guessNumberFalse, lowestGuessFetch, LOWEST_GUESS_FETCH} from '../actions/index'
import {combineReducers} from 'redux'


const initialState = {isCorrect : 'number generated', fewestGuesses : 'none'};



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
    case LOWEST_GUESS_FETCH:
      console.log(lowestGuess);
    default:
      return state
  }
}

export default rootReducer;
