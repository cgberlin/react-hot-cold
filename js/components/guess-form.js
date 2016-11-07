import React from 'react'
import {connect} from 'react-redux'
import store from '../store'
import {postLowestGuess} from '../actions/index'
var createNumber = () => {return (Math.floor(Math.random()*(100-1+1)+1))};
var randomNumber = createNumber();
var lowestGuessPass = 0;

var GuessForm = React.createClass({
  checkAnswer : function() {
    console.log(randomNumber);
    let userAnswer = this.refs.guessInput.value;
    if (userAnswer == randomNumber) {
      store.dispatch({type: 'GUESS_NUMBER_TRUE'});
      store.dispatch(postLowestGuess(lowestGuessPass));
    }
    else {
      lowestGuessPass++;
      store.dispatch({type: 'GUESS_NUMBER_FALSE'});
    }
  },
  resetGame : function() {
    randomNumber = createNumber();
    lowestGuessPass = 0;
  },
  render : function(){
        return (
          <div>
            <form>
              <input type = 'number' id = 'guess-form-input' ref = "guessInput"></input>
              <button type = 'button' onClick ={this.checkAnswer}>Guess</button>
              <button type = 'button' onClick ={this.resetGame}>Reset</button>
            </form>
          </div>
        );
      }
});

export default GuessForm;
