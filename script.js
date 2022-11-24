const board = document.querySelector('.board')
const base = 'https://murmuring-meadow-93133.herokuapp.com'

fetch(`${base}/api`,{mode:'cors'})
.then(function(response){
    return response.json()
})
.then(function(posts){
    console.log(posts)
    for (let i= 0; i<posts.length;i++){
           
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML=`
        <h2>${posts[i].title}</h2>
        <a href="./detail.html?id=${posts[i].id}">Read this post</a>
        <p>Posted by ${posts[i].user.user_name}
        <p>Updated at ${posts[i].updated_formatted}
        `
        board.append(card)
    }
})