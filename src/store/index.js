import { combineReducers, createStore } from 'redux'
import app from './reducers'

const rootReducer = combineReducers({ app })

const store = createStore(rootReducer)

export default store