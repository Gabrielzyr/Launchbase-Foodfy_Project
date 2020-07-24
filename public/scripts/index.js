// const getRecipies = document.querySelectorAll('.cards-wrp .card')


// for(let receitas of getRecipies) {
//     receitas.addEventListener('click', function() {
//     const getRecipiesId = receitas.getAttribute('id')
//     console.log("não tem nada")
//     // getRecipiesId = window.location.href = `/receita-descricao/${getRecipiesId}`
//     })
// }

const recipes = document.querySelectorAll(".cards-wrp .card")

for (let recipe of recipes) {
    recipe.addEventListener('click', function () {
        const getRecipeId = recipe.getAttribute('id')
        getRecipeId = window.location.href = `/receita/${getRecipeId}`
        console.log(getRecipeId)
    })
}
// const cards = document.querySelectorAll('.card')
// const modal = document.querySelector('.modal-overlay')
// const closeModal = document.querySelector('.close-modal')

// for (let card of cards) {
//     const imgSRC = card.querySelector('img').src;
//     const author = card.querySelector('p').innerText
//     const foodTitle = card.querySelector('h3').innerText

//     card.addEventListener('click', function() {
//         const modalIMG = card.getAttribute('id')
//         modal.classList.add('active')
//         modal.querySelector('img').src = imgSRC
//         modal.querySelector('h2').innerText = foodTitle
//         modal.querySelector('p').innerText = author
//     })
// }

// closeModal.addEventListener('click', function() {
//     modal.classList.remove('active')
// })

// window.onclick = function(el) {
//     if (el.target == modal)
//     modal.classList.remove('active')
// }