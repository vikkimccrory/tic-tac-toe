# production: 'https://tic-tac-toe-api-production.herokuapp.com/',
# development: 'https://tic-tac-toe-api-development.herokuapp.com'


curl "https://tic-tac-toe-api.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"

echo
