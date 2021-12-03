axios.get('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=ye5gAlYFH3Wj2gyYzDAApXN5NOXSkKOd').then(response => {
    const main = document.querySelector('#newscardsWorld')

    response.data.results.forEach(element => {
        if(element.abstract !== "" && element.title !== ""){
            let containerElement = document.createElement('li')
            containerElement.classList.add('container', 'animate__animated')
            containerElement.setAttribute('id', element.published_date)
    
            let deleteBtnElement = document.createElement('div')
            deleteBtnElement.innerHTML = '<i class="fas fa-inbox"></i>'
            deleteBtnElement.classList.add('archiveBtn')
    
            let newsElement = document.createElement('article')
            newsElement.classList.add('newsarticle')
    
            let imgElement = document.createElement('img')
            imgElement.setAttribute('src', element.multimedia[0].url)
            imgElement.classList.add('newsImage')
            newsElement.appendChild(imgElement)

            let textContainer = document.createElement('div')
            let headingElement = document.createElement('p')
            let textElement = document.createElement('p')
            headingElement.classList.add('newsTitel')
            textElement.classList.add('newsText')
            headingElement.textContent = element.title
            textElement.textContent = element.abstract.substring(0, 35) + '...'
            textContainer.appendChild(headingElement)
            textContainer.appendChild(textElement)
            newsElement.appendChild(textContainer)
    

            containerElement.appendChild(deleteBtnElement)
            containerElement.appendChild(newsElement)
    
            main.appendChild(containerElement)
        }
    });
})