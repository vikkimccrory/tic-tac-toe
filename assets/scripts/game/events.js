// Events that need to happen
// 1. On clicking the New Game button, a new game will start (onStartGame)
// 2. On clicking a spot on the board, the X will appear in that spot and that
// spot will no longer be clickable until next game
// 3. Determine when game is over
// 4. When game is over, display winner page and new game button

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

// Variable for current player (X then O and repeats til game end)
store.currentPlayer = 'X'
// Make a variable for the display of the game status (document.querySelector('.status'))
store.gameOver = false
// Set the starting game state to an array of empty strings that each link back to each cell

// Make a function to validate results with an array for each possible winning combination

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
  if ($(store.game.cell).text() === '') {
    cell.html(store.currentPlayer)
  } else if ($(cell).html !== '') {
    $('.cell').off()
    $('#message').text('Cell taken')
  }
  api.cellClick(index)
    .then(ui.cellClickSuccess)
    .catch(ui.cellClickFailure)
}

module.exports = {
  onStartGame,
  onCellClick
}
