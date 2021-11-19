if(localStorage.getItem('darkmode') !== null){
    const bodyElement = document.querySelector('body')
    const darkmodeBtn = document.querySelector('#darkmodeBtn')

    bodyElement.classList.add('darkmode')

    darkmodeBtn.textContent = 'Toggle light mode'
}