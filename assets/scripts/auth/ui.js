'use strict'

const store = require('./../store')

const signUpSuccess = function (res) {
  // Resets the form
  $('#sign-up').trigger('reset')
  // Messaging
  $('#message').text('Sign Up Successful! Go Sign In :)')
}
const signUpFailure = function (err) {
  console.log(err)
  $('#message').text('Sign up failed :(')
}

const signInSuccess = function (res) {
  // Resets the form
  $('#sign-in').trigger('reset')
  $('#message').text('Welcome back :)')
  console.log(store)
  store.user = res.user
  console.log(store)
  console.log('in signInSuccess')
  $('#after-sign-in').show()
  $('#before-sign-in').hide()
  $('.game-board').hide()
}

const signInFailure = function (err) {
  console.log(err)
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
