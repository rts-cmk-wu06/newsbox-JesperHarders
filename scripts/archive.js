let newsObjectReturned = JSON.parse(localStorage.getItem('archivedItems'))
const archivedNewsWorld = document.querySelector('#newscardsWorld')
if(localStorage.getItem('archivedItems')){
    archivedList = JSON.parse(localStorage.getItem('archivedItems'))
}


newsObjectReturned.forEach((e) => {
    
    let archivedcontainerElement = document.createElement('li')
    archivedcontainerElement.classList.add('container', 'animate__animated')
    archivedcontainerElement.setAttribute('id', e.id)

    let deletedBtnElement = document.createElement('div')
    deletedBtnElement.innerHTML = '<i class="fas fa-trash-alt"></i>'
    deletedBtnElement.classList.add('deleteBtn')

    let archivedNewsElement = document.createElement('article')
    archivedNewsElement.classList.add('newsarticle')

    let imgElement = document.createElement('img')
    imgElement.setAttribute('src', e.img)
    imgElement.classList.add('newsImage')
    archivedNewsElement.appendChild(imgElement)

    let textContainer = document.createElement('div')
    let headingElement = document.createElement('p')
    let textElement = document.createElement('p')
    headingElement.classList.add('newsTitel')
    textElement.classList.add('newsText')
    headingElement.textContent = e.titel
    textElement.textContent = e.text
    textContainer.appendChild(headingElement)
    textContainer.appendChild(textElement)
    archivedNewsElement.appendChild(textContainer)

    archivedcontainerElement.appendChild(deletedBtnElement)
    archivedcontainerElement.appendChild(archivedNewsElement)

    archivedNewsWorld.appendChild(archivedcontainerElement)
});


mainContainer.addEventListener('touchstart', (e) => {
    
    if(e.target.classList == 'deleteBtn'){
        e.target.onclick = (e) => {
            e.target.parentElement.classList.add('animate__backOutDown')

            let userObject = {
                id: e.target.parentElement.id,
                titel: e.target.parentElement.querySelector('.newsTitel').textContent,
                text: e.target.parentElement.querySelector('.newsText').textContent,
                img: e.target.parentElement.querySelector('.newsImage').src
            }

            archivedList = archivedList.filter((item) => userObject.id != item.id)

            if(archivedList.length > 0){
                localStorage.setItem('archivedItems', JSON.stringify(archivedList))
            } else {
                localStorage.removeItem('archivedItems')
            }

            setTimeout(() => {
                e.target.parentElement.remove()
            }, 600)
        }
    }
})