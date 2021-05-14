'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// Sign up form submit handler

const onSignUp = function () {
  // prevent that default
  event.preventDefault()
  // This is a submit event
  console.log(event.target)
  // Pull user data from form
  const data = getFormFields(event.target)
  console.log(data)
  // Make an API request
  api.signUp(data)
  // success
    .then(ui.signUpSuccess)
  // failure
    .catch(ui.signUpFailure)
}
// Sign in form submit handler
const onSignIn = function () {
  // prevent that default
  event.preventDefault()
  // This is a submit event
  console.log(event.target)
  // Pull user data from form
  const data = getFormFields(event.target)
  console.log(data)
  // Make an API request
  api.signIn(data)
  // success
    .then(ui.signInSuccess)
  // failure
    .catch(ui.signInFailure)
}
// Sign out button click handler
const onSignOut = function (event) {
  // prevent that default
  event.preventDefault()
  // Make an API request
  api.signOut()
  // success
    .then(ui.signOutSuccess)
  // failure
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
