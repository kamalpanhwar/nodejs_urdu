const express = require('express')
const app = express()
// app.get('/home')

app
  .route('/home')
  .get((request, response, nextHandler) => {
    response.type('text/html')
    response.write('<!DOCTYPE html')
    nextHandler()
  })
  .get((request, response, nextHandler) => {
    response.end(`
<html lang="en">
  <head>
    <meta charset="utf-8">
      <title>Sample to show chainable Routes</title>
  </head>
    <body role="application">
      <form method="post" action="/home">
        <input type="text" />
        <button type="submit">Send</button>
      </form>
    </body>
  </html>
    `)
  })
  .post((request, response, nextHandler) => {
    response.send('Got it!')
  })

app.listen(3000, () => console.log('Web running on http://localhost:3000'))
