function greeting(name) {
  console.log('Hi ' + name)
}

function processUser(callback) {
  var name = 'John'
  callback(name)
}

processUser(greeting)
