//expressjs.com
// npm i express --save

var express = require('express')
var router1 = express.Router()


//Middleware spécifique àrouter1  ce router
router1.use(function timeLog (req, res, next) {
    console.log('Requested URI Path :', req.url)
    next()
})

// define the home page route
router1.get('/', function (req,res) {
    res.send('Racine de l Api router1')
})

// define the about route
router1.get('/about', function (req, res) {
    res.send('à propos')
})

module.exports = router1
