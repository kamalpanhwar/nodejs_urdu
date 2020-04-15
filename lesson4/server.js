const express = require('express')
const app = express()
app.get('/', (request, response, next) => {
  response.status(200).send('<h1>Hello from ExpressJS</h1>')
})

app.post('/', (request, response, next) => {
  response.status(201).send('<h1>Hello from ExpressJS POST request</h1>')
})

app.put('/', (request, response, next) => {
  response.status(200).send('<h1>Hello from ExpressJS PUT request</h1>')
})

app.patch('/', (request, response, next) => {
  response.status(200).send('<h1>Hello from ExpressJS PATCH request</h1>')
})
app.delete('/', (request, response, next) => {
  response.status(200).send('<h1>Hello from ExpressJS delete request</h1>')
})

// get - browse data effect
// post - new record resource
// put - updation  - all resource
// patch updation ek unit resource change
// delete destroy
app.listen(3000, function() {
  console.log('Web server is listening on http://localhost:3000')
})
