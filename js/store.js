import React from 'react'
var ReactDOM = require('react-dom');
var redux = require('redux');
var reducers = require('./reducers/index');

var createStore = redux.createStore;

var store = createStore(reducers.hotColdReducer);


export default store;
