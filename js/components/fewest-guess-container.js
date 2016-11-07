import React from 'react'
import {connect} from 'react-redux'
import store from '../store'
import {getLowestGuess} from '../actions/index'

var FewestGuesses = React.createClass({
  componentDidMount : () => {
    store.dispatch(
      getLowestGuess()
    );
  },
  render : (props) => {
    var Guesses = store.getState().fewestGuesses;
    return (
        <div>
          <h2>Fewest Guesses</h2>
          {Guesses}
        </div>
      );
    }
});

var mapStateToProps = function(state, props) {
  return {state};
};
var Container = connect(mapStateToProps)(FewestGuesses);
export default Container;
