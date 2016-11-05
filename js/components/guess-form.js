import React from 'react'
import {connect} from 'react-redux'
import store from '../store'
var GuessForm = React.createClass({
  checkAnswer : function() {
    var userAnswer = this.refs.guessInput.value;
    store.dispatch({type: 'GUESS_NUMBER'});
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
