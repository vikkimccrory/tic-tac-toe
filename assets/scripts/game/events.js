// Events that need to happen
// 1. On clicking the New Game button, a new game will start (onStartGame)
// 2. On clicking a spot on the board, the X will appear in that spot and that
// spot will no longer be clickable until next game
// 3. Determine when game is over
// 4. When game is over, display winner page and new game button

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

store.currentPlayer = 'X'
store.gameOver = false

const onStartGame = function (event) {
  store.gameOver = false
  store.currentPlayer = 'X'
  $('.game-board').trigger('reset')
  console.log('in onStartGame')
  event.preventDefault()
  api.newGame(event)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onCellClick = function (event) {
  store.gameOver = false
  const cell = $(event.target)
  const index = cell.data('cell-index')
  event.preventDefault()
  cell.html(store.currentPlayer)
  api.cellClick(index)
    .then(ui.cellClickSuccess)
    .catch(ui.cellClickFailure)
}

module.exports = {
  onStartGame,
  onCellClick
}
