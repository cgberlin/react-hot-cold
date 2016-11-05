import React from 'react'
import {connect} from 'react-redux'
import store from '../store'
var GuessAnswer = React.createClass ({
  render : function(){
        var isCorrect = store.getState().isCorrect;
        return (
            <div>
              <h1>{isCorrect}</h1>
            </div>
        );
      }
});
var mapStateToProps = function(state, props) {
  return {state};
};
var Container = connect(mapStateToProps)(GuessAnswer);
export default Container;
