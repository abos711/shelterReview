#!/bin/bash

API="http://localhost:4741"
URL_PATH="/listings"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "listing": {
      "address": "'"${ADDRESS}"'",
      "review": "'"${REVIEW}"'"
    }
  }'

echo
