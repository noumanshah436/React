import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store

// Applied logger and thunk middlewares using applyMiddleware function.

// Using composeWithDevTools to use devtools chrome extension.
