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

server.get("/receita", function(req, res) {
    return res.render('receita.njk')
})

server.get("/receitas/:index", function (req, res) {
    const recipes = []; // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;
  
    console.log(recipes[recipeIndex]);
  })

  //render temporário

server.listen(3000)