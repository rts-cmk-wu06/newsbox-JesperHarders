if(localStorage.getItem('darkmode') !== null){
    const bodyElement = document.querySelector('body')
    const darkmodeBtn = document.querySelector('#darkmodeBtn')
    const newsList = document.querySelector('#newscardsWorld')
    const headerElement = document.querySelector('.header')

    bodyElement.classList.add('darkmode')
    headerElement.classList.add('darkmode')
    
    darkmodeBtn.textContent = 'Toggle light mode'
}