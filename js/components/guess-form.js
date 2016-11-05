import React from 'react'
import {connect} from 'react-redux'
import store from '../store'
var randomNumber = (Math.floor(Math.random()*(100-1+1)+1));
var GuessForm = React.createClass({
  checkAnswer : function() {
    console.log(randomNumber);
    let userAnswer = this.refs.guessInput.value;
    if (userAnswer == randomNumber) {
      store.dispatch({type: 'GUESS_NUMBER_TRUE'});
    }
    else {
      store.dispatch({type: 'GUESS_NUMBER_FALSE'});
    }
  },
  render : function(){
        return (
          <div>
            <form>
              <input type = 'number' id = 'guess-form-input' ref = "guessInput"></input>
              <button type = 'button' onClick ={this.checkAnswer}>Guess</button>
            </form>
          </div>
        );
      }
});

export default GuessForm;
