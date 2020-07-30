// const recipesData = require('../src/database/data')
const recipesData = require('../src/database/data.json')


exports.index = function(req, res) {
    return res.render('admin/index', {recipes: recipesData.recipes})
}

// exports.show = function(req, res) {
//     return res.render("admin/details")
// }

exports.show = function (req, res) {
    const { id } = req.params
    const getRecipe = recipesData.recipes.find(function(recipe) {
        return recipe.id == id
    })
    if (!getRecipe) return res.send('Recipe not found!')
    const recipe = {
        ...getRecipe
    }
    
    return res.render('admin/details', { recipe })
}

exports.edit = function (req, res) {
    return res.render("admin/edit")
}