const arrowElementWorld = document.querySelector('.listheaders__arrow')
const newsCardslistWorld = document.querySelector('#newscardsWorld')

let arrowElements = [arrowElementWorld]

arrowElementWorld.addEventListener('click', (e) => {
    if(e.target.classList == 'rotate-right'){
        e.target.classList.remove('rotate-right')
    } else {
        e.target.classList.add('rotate-right')
        console.log(e);
    }
})