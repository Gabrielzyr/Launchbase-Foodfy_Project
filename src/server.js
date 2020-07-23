const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require('./database/data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('src/view', {
    express: server,
    autoescape: false,
    noCache: true,
})

server.get("/", function(req, res) {
    return res.render('index.njk', {recipes: recipes})
})

server.get("/sobre", function(req, res) {
    return res.render("about.njk")
})

server.get('/receitas', function(req, res) {
    return res.render('recipes.njk', {recipes: recipes})
})

server.listen(3000)