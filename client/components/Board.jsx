import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions/index.jsx'
import {O, X, EMPTY} from '../../shared/constants.js'
import './style/style.scss'

const Board = ({ board, player, winner, onClickCell }) => (
  <div className="game">
    <h2 className="message">{winner && `${winner} wins!`}</h2>
    <div className="board">
      <div className="board--row">
        <div className="board--cell" onClick={() => onClickCell(board, 0, player)}>
          {board[0] != EMPTY && (board[0] == O ? <img src="/images/o.svg"/> : <img src="/images/x.svg"/>)}
        </div>
        <div className="board--cell" onClick={() => onClickCell(board, 1, player)}>
          {board[1] != EMPTY && (board[1] == O ? <img src="/images/o.svg"/> : <img src="/images/x.svg"/>)}
        </div>
        <div className="board--cell" onClick={() => onClickCell(board, 2, player)}>
          {board[2] != EMPTY && (board[2] == O ? <img src="/images/o.svg"/> : <img src="/images/x.svg"/>)}
        </div>
      </div>
      <div className="board--row">
        <div className="board--cell" onClick={() => onClickCell(board, 3, player)}>
          {board[3] != EMPTY && (board[3] == O ? <img src="/images/o.svg"/> : <img src="/images/x.svg"/>)}
        </div>
        <div className="board--cell" onClick={() => onClickCell(board, 4, player)}>
          {board[4] != EMPTY && (board[4] == O ? <img src="/images/o.svg"/> : <img src="/images/x.svg"/>)}
        </div>
        <div className="board--cell" onClick={() => onClickCell(board, 5, player)}>
          {board[5] != EMPTY && (board[5] == O ? <img src="/images/o.svg"/> : <img src="/images/x.svg"/>)}
        </div>
      </div>
      <div className="board--row">
        <div className="board--cell" onClick={() => onClickCell(board, 6, player)}>
          {board[6] != EMPTY && (board[6] == O ? <img src="/images/o.svg"/> : <img src="/images/x.svg"/>)}
        </div>
        <div className="board--cell" onClick={() => onClickCell(board, 7, player)}>
          {board[7] != EMPTY && (board[7] == O ? <img src="/images/o.svg"/> : <img src="/images/x.svg"/>)}
        </div>
        <div className="board--cell" onClick={() => onClickCell(board, 8, player)}>
          {board[8] != EMPTY && (board[8] == O ? <img src="/images/o.svg"/> : <img src="/images/x.svg"/>)}
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  board: state.game.board,
  player: state.player,
  winner: state.game.winner,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  onClickCell: Actions.clickCell,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Board)
