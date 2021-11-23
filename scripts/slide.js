const archiveBtn = document.querySelector('.archiveBtn')
const container = document.querySelector('.container')
const mainContainer = document.querySelector('#main')
let startLocation
let endLocation
let touchMove
let archivedList = []
if(localStorage.getItem('archivedItems')){
    archivedList = JSON.parse(localStorage.getItem('archivedItems'))
}

mainContainer.addEventListener('touchstart', (e) => {

    
    startLocation = Math.floor(e.touches[0].clientX)
    
    e.target.addEventListener('touchmove', (e) => {
        if(e.target.tagName == 'ARTICLE'){
            touchMove = Math.floor(e.touches[0].clientX)
            
            if(touchMove < startLocation && touchMove > startLocation - (window.screen.width * 40) / 100){
                e.target.style.transform = `translateX(${touchMove - startLocation}px)`
            }
        }
        
    })
    
    e.target.addEventListener('touchend', (e) => {
        if(e.target.tagName == 'ARTICLE'){
            endLocation = Math.floor(e.changedTouches[0].clientX)
            const archiveBtnWidth = (window.screen.width * 40) / 100
            if(endLocation < startLocation - archiveBtnWidth / 2){
                e.target.style.transform = `translateX(-${archiveBtnWidth}px)`
            } else {
                e.target.style.transform = `translateX(0)`
            }
        }
    })
    
    if(e.target.classList == 'archiveBtn'){
        e.target.onclick = (e) => {
            e.target.parentElement.classList.add('animate__backOutDown')

            let userObject = {
                id: e.target.parentElement.id,
                titel: e.target.parentElement.querySelector('.newsTitel').textContent,
                text: e.target.parentElement.querySelector('.newsText').textContent
            }

            archivedList.push(userObject)

            localStorage.setItem('archivedItems', JSON.stringify(archivedList))

            setTimeout(() => {
                e.target.parentElement.remove()
            }, 800)
        }
    }
})
