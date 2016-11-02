import React from 'react'
var ReactDOM = require('react-dom');
var redux = require('redux');

import GuessContainer from './components/guess-container'


var reducers = require('./reducers/index');


var MainPage = function() {
  return <GuessContainer />
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(MainPage, document.getElementById('app'));
});
