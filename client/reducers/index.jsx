import {combineReducers} from 'redux'
import game from './game.jsx'
import player from './player.jsx'

const reducers = combineReducers({
  game,
  player,
})

export default reducers
