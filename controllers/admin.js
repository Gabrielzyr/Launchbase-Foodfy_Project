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

// exports.show = function(req,res) {
//     const { id } = req.params
//     const foundInstructor = data.instructors.find(function(instructor){
//         return instructor.id == id
//     })
//     if (!foundInstructor) return res.send('instructor not found')

//     const instructor = {
//         ...foundInstructor,
//         age: age(foundInstructor.birth),
//         services: foundInstructor.services.split(","),
//         created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at)
//     }
//     return res.render('instructors/show', { instructor })
// }