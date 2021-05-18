
const store = require('./../store')
// Game Messages
// Make a winning message
// Make a draw message
// Let the initial message display who's turn it is (starts with playerX, then playerO)

const newGameSuccess = function (res) {
  // Shows game board on click
  $('.game-board').show()
  // Displays opening message
  $('#message').text('Let\'s go!')
  store.game = res.game
  // Resets game board
  $('.cell').text(' ')
  $('.cell').val(' ')
}

const newGameFailure = function (err) {
  console.log(err)
  $('#message').text('Can\'t start new game yet :(')
}

const cellClickSuccess = function (res) {
  store.game = res.game
  if (store.currentPlayer === true) {

  }
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

const gameResultWon = function () {
  $('#game-result').text(`Player ${store.currentPlayer} won!`)
  console.log(store.game)
}

const gameResultDraw = function () {
  $('#game-result').text('It\'s a draw!')
  console.log(store.game)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  cellClickSuccess,
  cellClickFailure,
  gameResultWon,
  gameResultDraw
}
