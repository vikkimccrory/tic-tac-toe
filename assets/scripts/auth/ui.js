'use strict'

const store = require('./../store')

const signUpSuccess = function (res) {
  // Resets the form
  $('#sign-up').trigger('reset')
  // Messaging
  $('#message').text('Sign Up Successful! Go Sign In :)')
}
const signUpFailure = function () {
  $('#message').text('Sign up failed :(')
}

const signInSuccess = function (res) {
  // Resets the form
  $('#sign-in').trigger('reset')
  $('#message').text('Welcome back :)')
  store.user = res.user
  $('#after-sign-in').show()
  $('#before-sign-in').hide()
  /// Hides game board until new game button is clicked
  $('.game-board').hide()
}

const signInFailure = function () {
  $('#message').text('Sign in failed :(')
}

const signOutSuccess = function () {
  // clear out the user - set the stored user to null
  store.user = null
  $('#message').text('Signed out successfully!')
  $('#before-sign-in').show()
  $('#after-sign-in').hide()
  $('#player-turn').hide()
}

const signOutFailure = function () {
  $('#message').text('Sign out failure :(')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
