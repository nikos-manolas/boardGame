import * as Actions from '../actions/index.jsx'
import { O, X } from '../../shared/constants.js'

const initialState = O

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CLICK_CELL_FULFILLED:
      return action.payload.player;
    default:
      return state
  }
}

export default reducer
