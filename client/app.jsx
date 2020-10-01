import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reduxLogger from 'redux-logger'
import reduxPromise from 'redux-promise-middleware'
import reducers from './reducers/index.jsx'
import Board from './components/Board.jsx'

const middleware = applyMiddleware(reduxPromise(), reduxLogger())
const initialState = {}
const store = createStore(reducers, initialState, middleware)

render(
  <Provider store={store}>
    <Board />
  </Provider>,
  document.getElementById('root')
)
