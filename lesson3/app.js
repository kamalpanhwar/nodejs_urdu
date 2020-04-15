const express = require('express')
const app = express()
app.get('/', (request, response, next) => {
  response.status(200).send('Hello from ExpressJS')
})

app.listen(3000, () => console.log('Web server running on port 1337'))
