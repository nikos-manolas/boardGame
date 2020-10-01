import axios from 'axios'

export const CLICK_CELL = 'CLICK_CELL'
export const CLICK_CELL_FULFILLED = `${CLICK_CELL}_FULFILLED`

export const clickCell = (board, move, player) => {
  return {
    type: CLICK_CELL,
    payload: axios
      .post('/api/process-game', { game: { board }, move, player })
      .then(res => res.data),
  }
}
