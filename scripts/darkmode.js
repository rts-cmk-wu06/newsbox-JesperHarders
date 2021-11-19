const darkmodeBtn = document.querySelector('#darkmodeBtn')

darkmodeBtn.addEventListener('click', () => {
    const bodyElement = document.querySelector('body')

    if(localStorage.getItem('darkmode') == null){
        localStorage.setItem('darkmode', 'dark')

        bodyElement.classList.add('darkmode')

        darkmodeBtn.textContent = 'Toggle light mode'
    } else {
        localStorage.removeItem('darkmode')

        bodyElement.classList.remove('darkmode')

        darkmodeBtn.textContent = 'Toggle dark mode'
    }
})