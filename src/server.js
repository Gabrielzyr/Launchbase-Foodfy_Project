const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipesData = require('./database/data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('src/view', {
    express: server,
    autoescape: false,
    noCache: true,
})

server.get("/", function(req, res) {
    return res.render('index.njk', {recipes: recipesData})
})

server.get("/sobre", function(req, res) {
    return res.render("about.njk")
})

server.get('/receitas', function(req, res) {
    return res.render('recipes.njk', {recipes: recipesData})
})

server.get("/receita/:index", function (req, res) {
    const recipe = []; // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;
    return res.render('recipe-page.njk', { recipe: recipesData[recipeIndex]})
    // console.log(recipes[recipeIndex]);
  })

  //render temporário

server.listen(3000)