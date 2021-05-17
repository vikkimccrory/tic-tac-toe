
const config = require('./../config')
const store = require('./../store')

const newGame = function () {
  console.log('store.user.token' + `${store.user.token}`)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    data: {},
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const cellClick = function (index) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: { Authorization: `Bearer ${store.user.token}` },
    data: {
      game: {
        cell: {
          index: `${index}`,
          value: `${store.currentPlayer}`
        },
        over: false
      }
    }
  })
}

//       game: {
//         cell: {
//           index: `${data.gam}`,
//           value: `${data}`
//         },
//         over: false
//       }
//     }
//   })
// }

module.exports = {
  newGame,
  cellClick
}
