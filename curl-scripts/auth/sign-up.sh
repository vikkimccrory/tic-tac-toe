# production: 'https://tic-tac-toe-api-production.herokuapp.com/',
# development: 'https://tic-tac-toe-api-development.herokuapp.com'


curl "https://tic-tac-toe-api.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
