const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/recipes')
const admin = require('./controllers/admin')


routes.get("/", function(req, res) {
    return res.redirect("/index")
})

routes.get("/index", recipes.index)

routes.get("/sobre", recipes.about)

routes.get('/receitas', recipes.list)

routes.get("/receita/:index", recipes.recipe)


// // ADMIN PART
routes.get("/admin", function(req, res) {
    return res.redirect("/admin/recipes")
}); 

routes.get("/admin/recipes", admin.index); // Mostrar a lista de receitas
// routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
// routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
// routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

// routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
// routes.put("/admin/recipes", recipes.put); // Editar uma receita
// routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

module.exports = routes