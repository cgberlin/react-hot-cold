import React from 'react'
import GuessForm from './guess-form'
import GuessAnswer from './guess-answer'

var GuessContainer = (props) => {
  return (
    <div>
      <GuessForm />
      <GuessAnswer />
    </div>
  )
};
export default GuessContainer;
