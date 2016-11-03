import React from 'react'
import redux, { createStore } from 'redux'
import reducers from './reducers'

var store = createStore(reducers);


export default store;
