import * as Actions from '../actions/index.jsx'

export const EMPTY = ''
export const O = 'O'
export const X = 'X'

const initialState = {
  board: [
    EMPTY, EMPTY, EMPTY,
    EMPTY, EMPTY, EMPTY,
    EMPTY, EMPTY, EMPTY,
  ],
  winner: EMPTY,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CLICK_CELL_FULFILLED:
      return action.payload.game
    default:
      return state
  }
}

export default reducer
