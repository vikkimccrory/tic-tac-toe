
const config = require('./../config')

const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + './create/'
  })
}

module.exports = {
  newGame
}
