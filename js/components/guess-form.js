import React from 'react'

var GuessForm = (props) => {
  return (
    <div>
      <form>
        <input type = 'number' id = 'guess-form-input'></input>
        <button type = 'button'>Guess</button>
      </form>
    </div>
  );
}

export default GuessForm;
