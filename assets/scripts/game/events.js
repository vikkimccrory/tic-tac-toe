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
let gameIsOn = true
// Set the starting game state to an array of empty strings that each link back to each cell
let gameState = ['', '', '', '', '', '', '', '', '']
// Make a function to validate results with an array for each possible winning combination
let gameWon = false

const onStartGame = function (event) {
  $('.game-board').trigger('reset')
  console.log('in onStartGame')
  event.preventDefault()
  api.newGame(event)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onCellClick = function (event) {
  event.preventDefault()
  const cell = $(event.target)
  const index = cell.data('cell-index')
  cell.text(store.currentPlayer)
  // trying to turn off changing between X and O once clicked

  api.cellClick(index)
    .then(ui.cellClickSuccess)
    .catch(ui.cellClickFailure)
}

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const onGameResults = function (event) {
  const cell = $(event.target)
  const index = cell.data('cell-index')

  for (let i = 0; i < winningCombos[index.length]; i++) {
    const winningCombo = winningCombos[index]
    const a = index[winningCombo[0]]
    const b = index[winningCombo[1]]
    const c = index[winningCombo[2]]

    if (a === '' || b === '' || c === '') {
      gameWon = false
      continue
    } if (a === b && b === c) {
      gameWon = true
      console.log('game is over')
      break
    }
  }
  if (gameWon) {
    gameIsOn = false
      .then(ui.gameResultWon)
  }
}
module.exports = {
  onStartGame,
  onCellClick,
  onGameResults
}
