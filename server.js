const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

const server = express()

server.use(express.urlencoded({ extended: true })) //pesquisar mais sobre
server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(routes)

server.set('view engine', 'njk')

nunjucks.configure('src/view', {
    express: server,
    autoescape: false,
    noCache: true,
})

  //render temporário

server.listen(5000)