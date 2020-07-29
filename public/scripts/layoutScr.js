const currentPage = location.pathname
const headerLinks = document.querySelectorAll(".header-links a")

console.log(currentPage)

for (link of headerLinks ) {
    if (currentPage.includes(link.getAttribute("href"))) {
        link.classList.add('curPage')
    }
}