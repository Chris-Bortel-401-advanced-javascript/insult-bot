import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import people from './people.js'
import insults from './insult.js'

const reducer = combineReducers({
 people, insults
})

const store = () => {
  return createStore(reducer, composeWithDevTools())
} 

export default store();