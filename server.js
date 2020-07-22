const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipies = require('./src/database/data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true,
})

server.get("/", function(req, res) {
    return res.render('index')
})

server.listen(3000)