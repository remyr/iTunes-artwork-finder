import { combineReducers, applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '../reducers/index.js'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


let finalCreateStore = compose(
    // Middleware for development
    // applyMiddleware(thunk, logger())

    // Middleware for prod
    applyMiddleware(thunk)
)(createStore)

function configureStore(initialState = {}) {
    return finalCreateStore(rootReducer, initialState)
}

export default configureStore