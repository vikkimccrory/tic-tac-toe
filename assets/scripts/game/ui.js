// Success/Failure Messages
const newGameSuccess = function (res) {
  // Resets the board
  $('.game-board').trigger('reset')

  console.log('in newGameSuccess')
  // Messaging
  $('#message').text('Let\'s go!')
}

const newGameFailure = function (err) {
  console.log(err)
  $('#message').text('Can\'t start new game yet :(')
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
