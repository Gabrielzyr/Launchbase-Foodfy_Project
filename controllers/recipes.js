const fs = require('fs')
const recipesData = require('../src/database/data.json')



exports.index = function(req, res) {
    return res.render('recipes/index', {recipes: recipesData.recipes})
}

exports.about = function(req, res) {
    return res.render("recipes/about")
}

exports.list = function(req, res) {
    return res.render('recipes/recipes', {recipes: recipesData.recipes})
}

exports.recipe = function (req, res) {
    const recipe = []; // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;
    return res.render('recipes/recipe-page', { recipe: recipesData.recipes[recipeIndex]})
    // console.log(recipes[recipeIndex]);
}
