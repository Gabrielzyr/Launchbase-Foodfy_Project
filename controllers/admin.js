const fs = require("fs")
const recipesData = require('../src/database/data.json')


exports.index = function (req, res) {
    return res.render('admin/index', { recipes: recipesData.recipes })
}

exports.create = function (req, res) {
    return res.render("admin/create")
}

exports.post = function (req, res) {
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, fill all fiels')
        }
    }
    let { image, title, author, ingredients, methods, information } = req.body

    id = Number(recipesData.recipes.length + 1)
    // let id = 1
    // const lastRecipe = recipesData.recipes[recipesData.recipes.length - 1]

    // if (lastRecipe){
    //     id = lastRecipe.id + 1
    // }

    recipesData.recipes.push({
        id,
        image,
        title,
        author,
        ingredients,
        methods,
        information
    })
    fs.writeFile("src/database/data.json", JSON.stringify(recipesData, null, 2), function (err) {
        if (err) return res.send('write file error!')
        return res.redirect(`/admin/recipes/${id}`)
    })

}

exports.show = function (req, res) {
    const { id } = req.params
    const getRecipe = recipesData.recipes.find(function (recipe) {
        return recipe.id == id
    })
    if (!getRecipe) return res.send('Recipe not found!')
    const recipe = {
        ...getRecipe
    }

    return res.render('admin/details', { recipe })
}

exports.edit = function (req, res) {
    const { id } = req.params

    const foundRecipe = recipesData.recipes.find(function (recipe) {
        return recipe.id == id
    })
    if (!foundRecipe) return res.send('instructor not found')

    const recipe = {
        ...foundRecipe
    }

    return res.render("admin/edit", { recipe })
}

exports.put = function (req, res) {
    const { id } = req.body
    let index = 0
    const foundRecipe = recipesData.recipes.find(function (recipe, foundIndex) {
        if (id == recipe.id) {
            index = foundIndex
            return true
        }
    })
    if (!foundRecipe) return res.send('instructor not found')

    const recipe = {
        id: Number(req.body.id),
        ...foundRecipe,
        ...req.body
    }
    recipesData.recipes[index] = recipe
    fs.writeFile("src/database/data.json", JSON.stringify(recipesData, null, 2), function (err) {
        if (err) return res.send("write file error!")
        return res.redirect(`/admin/recipes/${id}`)
    })
}

exports.delete = function (req, res) {
    const { id } = req.body
    const filteredRecipe = recipesData.recipes.filter(function (recipe) {
        return recipe.id != id
    })
    recipesData.recipes = filteredRecipe
    fs.writeFile("src/database/data.json", JSON.stringify(recipesData, null, 2), function (err) {
        if (err) return res.send("Write file error!")

        return res.redirect("/admin/recipes")
    })
}