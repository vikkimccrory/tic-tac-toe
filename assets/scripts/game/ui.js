
const store = require('./../store')

/// New Game

const newGameSuccess = function (res) {
  store.currentPlayer = 'X'
  store.gameOver = false
  // Shows game board on new game button click
  $('.game-board').show('slow')
  // Displays player X's turn message on each new game
  $('#player-turn').show().text('Player X\'s turn!')
  store.game = res.game
  // Resets game board and any messages
  $('.cell').text(' ')
  $('.cell').val(' ')
  $('#message').text(' ')
}
const newGameFailure = function () {
  $('#message').text('Can\'t start new game yet :(')
}
/// /// Cell clicks

const cellClickSuccess = function (res) {
  store.game = res.game
  // Switches between players
  store.currentPlayer = store.currentPlayer === 'O' ? 'X' : 'O'
  // Displays message for who's turn it is
  if (store.currentPlayer === 'X') {
    $('#player-turn').text('Player X\'s turn!')
  } else if (store.currentPlayer === 'O') {
    $('#player-turn').text('Player O\'s turn!')
  }
  // X win checker
  if (store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') {
    $('#message').text('X Wins!')
    $('#player-turn').hide()
    $('.game-board').hide('slow')
  } else if (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') {
    $('#message').text('X Wins!')
    $('#player-turn').hide()
    $('.game-board').hide('slow')
  } else if (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') {
    $('#message').text('X Wins!')
    $('#player-turn').hide()
    $('.game-board').hide('slow')
  } else if (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') {
    $('#message').text('X Wins!')
    $('#player-turn').hide()
    $('.game-board').hide('slow')
  } else if (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') {
    $('#message').text('X Wins!')
    $('#player-turn').hide()
    $('.game-board').hide('slow')
  } else if (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') {
    $('#message').text('X Wins!')
    $('#player-turn').hide()
    $('.game-board').hide('slow')
  } else if (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') {
    $('#message').text('X Wins!')
    $('#player-turn').hide()
    $('.game-board').hide('slow')
  } else if (store.game.cells[6] === 'X' && store.game.cells[4] === 'X' && store.game.cells[2] === 'X') {
    $('#message').text('X Wins!')
    $('#player-turn').hide()
    $('.game-board').hide('slow')

  // O win checker
  } else if (store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') {
    $('#message').text('O Wins!')
    $('#player-turn').hide()
    $('.game-board').hide('slow')
  } else if (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') {
    $('#message').text('O Wins!')
    $('#player-turn').hide()
    $('.game-board').hide('slow')
  } else if (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') {
    $('#message').text('O Wins!')
    $('#player-turn').hide()
    $('.game-board').hide('slow')
  } else if (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') {
    $('#message').text('O Wins!')
    $('#player-turn').hide()
    $('.game-board').hide('slow')
  } else if (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') {
    $('#message').text('O Wins!')
    $('#player-turn').hide()
    $('.game-board').hide('slow')
  } else if (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') {
    $('#message').text('O Wins!')
    $('#player-turn').hide()
    $('.game-board').hide('slow')
  } else if (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') {
    $('#message').text('O Wins!')
    $('#player-turn').hide()
    $('.game-board').hide('slow')
  } else if (store.game.cells[6] === 'O' && store.game.cells[4] === 'O' && store.game.cells[2] === 'O') {
    $('#message').text('O Wins!')
    $('#player-turn').hide()
    $('.game-board').hide('slow')

    /// Tie checker
  } else if (store.game.cells[0] !== '' && store.game.cells[1] !== '' && store.game.cells[2] !== '' && store.game.cells[3] !== '' &&
store.game.cells[4] !== '' && store.game.cells[5] !== '' && store.game.cells[6] !== '' && store.game.cells[7] !== '' &&
store.game.cells[8] !== '') {
    $('#message').text('Tie!')
    $('#player-turn').hide()
    $('.game-board').hide('slow')
  }
}
/// Cell click failure
const cellClickFailure = function () {
  $('#message').text('Oops! Try again.')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  cellClickSuccess,
  cellClickFailure
}
