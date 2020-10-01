const { O, X, EMPTY } = require('../shared/constants.js')

const getNewBoard = (board, player, move) => {
  return [ ...board.slice(0, move), player, ...board.slice(move + 1) ];
};

const getWinner = (gamingBoard, player) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const isPlayerAwinner = winningCombinations.find(combination => {
    return combination.every(indexOfBoard => gamingBoard[indexOfBoard] === player)
  }); 
  return isPlayerAwinner ? player : EMPTY;
};

const processGame = (data) => {
  const { game: { board }, player, move } = data;
  const isMoveAlreadyTaken = !!board[move];
  const gamingBoard = !isMoveAlreadyTaken ? getNewBoard(board, player, move) : board;
  const winner = !isMoveAlreadyTaken ? getWinner(gamingBoard, player): EMPTY;

  const nextPlayerTomove = player === O ? X : O;
  return { game: { board: gamingBoard, winner }, player: nextPlayerTomove };
}

module.exports = processGame
