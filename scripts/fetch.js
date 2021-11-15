axios.get('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=ye5gAlYFH3Wj2gyYzDAApXN5NOXSkKOd').then(response => {
    console.log(response.data);

    response.data.results.forEach(element => {
        
    });
})