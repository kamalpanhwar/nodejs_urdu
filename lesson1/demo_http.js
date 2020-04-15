var http = require('http')
http
  .createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(` You called URL: ${req.url}`)
    res.end()
  })
  .listen(3000)

//filename demo_http.js
