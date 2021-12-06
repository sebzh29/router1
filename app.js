var express = require('express')
var app = express()


var router1 = require('./router1')
app.use('/api/', router1)

// start the server

var server = app.listen(8000, function() {
    console.log('Listening on port 8000...')
})