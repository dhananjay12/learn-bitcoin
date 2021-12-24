## Simple private Blockchain

A simple in memory blockchain, with following endpoints:

* `/api/block/:index`: GET Endpoint to retrieve a block by index, url: "/api/block/:index"
* `/api/block` : POST Endpoint to add a new Block, url: "/api/block". Body could be anything, for ex.
```
curl --location --request POST 'http://localhost:3000/api/block' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'qwe=qwe' \
--data-urlencode '123123=123123'
```

## Level DB 

To persist, level DB is used for bitcoin-core and go-ethereum. 