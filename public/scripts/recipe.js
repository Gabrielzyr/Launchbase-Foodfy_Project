const showIngr = document.querySelector(".rec-show.ingr")
const hideIngr = document.querySelector(".rec-hide.ingr")
const Ingred = document.querySelector('.db-data.ingr')

const showPrep = document.querySelector(".rec-show.prep")
const hidePrep = document.querySelector(".rec-hide.prep")
const Prepar = document.querySelector('.db-data.prep')

const showInf = document.querySelector(".rec-show.Inf")
const hideInf = document.querySelector(".rec-hide.Inf")
const Info = document.querySelector('.db-data.Inf')


showIngr.addEventListener('click', function() {
    Ingred.classList.add('show')
    showIngr.classList.add('hide')
    hideIngr.classList.add('show')
})
hideIngr.addEventListener('click', function() {
    Ingred.classList.remove('show')
    showIngr.classList.remove('hide')
    hideIngr.classList.remove('show')
})

showPrep.addEventListener('click', function() {
    Prepar.classList.add('show')
    showPrep.classList.add('hide')
    hidePrep.classList.add('show')
})
hidePrep.addEventListener('click', function() {
    Prepar.classList.remove('show')
    showPrep.classList.remove('hide')
    hidePrep.classList.remove('show')
})

showInf.addEventListener('click', function() {
    Info.classList.add('show')
    showInf.classList.add('hide')
    hideInf.classList.add('show')
})
hideInf.addEventListener('click', function() {
    Info.classList.remove('show')
    showInf.classList.remove('hide')
    hideInf.classList.remove('show')
})