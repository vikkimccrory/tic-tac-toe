// Events that need to happen
// 1. On clicking the New Game button, a new game will start (onStartGame)
// 2. On clicking a spot on the board, the X will appear in that spot and that
// spot will no longer be clickable until next game
// 3. Determine when game is over
// 4. When game is over, display winner page and new game button

const api = require('./api')
const ui = require('./ui')

const onStartGame = function (event) {
  event.preventDefault()
  console.log('in onStartGame')
  api.newGame(event)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onCellClick = function (event) {
  event.preventDefault()
  console.log('in onCellClick')
  $('.cell[data-cell-index]').html('X')
}

module.exports = {
  onStartGame,
  onCellClick
}
