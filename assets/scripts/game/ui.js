
const store = require('./../store')
// Game Messages
// Make a winning message
// Make a draw message
// Let the initial message display who's turn it is (starts with playerX, then playerO)

const newGameSuccess = function (res) {
  // Resets the board
  $('.game-board').trigger('reset')
  $('#message').text('Let\'s go!')
  store.game = res.game
  console.log('res.game' + res.game)
}

const newGameFailure = function (err) {
  console.log(err)
  $('#message').text('Can\'t start new game yet :(')
}

const cellClickSuccess = function (res) {
  store.game = res.game
  store.currentPlayer = store.currentPlayer === 'O' ? 'X' : 'O'
  if (store.currentPlayer === 'X') {
    $('#player-turn').text('Player X\'s turn!')
  } else if (store.currentPlayer === 'O') {
    $('#player-turn').text('Player O\'s turn!')
  }
  console.log(res.game)
}

const cellClickFailure = function () {
  console.log('Patch request failed')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  cellClickSuccess,
  cellClickFailure
}
