const arrowElementWorld = document.querySelector('.listheaders__arrow')
const newsCardslistWorld = document.querySelector('#newscardsWorld')

let arrowElements = [arrowElementWorld]

arrowElements.forEach(element => {
    element.addEventListener('click', () => {
        if(element.classList !== 'rotate-right'){
            element.classList.add('rotate-right')
        } else {
            element.remove('rotate-right')
        }

    })
})