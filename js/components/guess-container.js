import React from 'react'
import GuessForm from './guess-form'
import GuessAnswer from './guess-answer'
import FewestGuesses from './fewest-guess-container'

var GuessContainer = (props) => {
  return (
    <div>
      <GuessForm />
      <GuessAnswer />
      <FewestGuesses />
    </div>
  );
};
export default GuessContainer;
