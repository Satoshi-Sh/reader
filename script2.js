// get postid 

const url = new URL(window.location.href)
const id = url.searchParams.get('id')
const base = 'https://murmuring-meadow-93133.herokuapp.com'

// get info

const board = document.querySelector('.board')
const comment = document.querySelector('.comment')

fetch(`${base}/api/${id}`,{mode:'cors'})
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    board.innerHTML=`
    <div class='post'>
    <div class='header'>
    <h1>${data.post.title}</h1>
    <p>Posted by ${data.post.user.user_name}</p>
    <p>Updated at ${data.post.created_formatted}</p>
    </div>
    <div class='text'>
    <p>${data.post.text}</p>
    </div>
    </div>
    `
    if (data.comments.length>0){
        for (let i =0; i<data.comments.length;i++){
            const c = data.comments[i]
            const card = document.createElement('div')
            card.classList.add('card')
            card.innerHTML = `
        
            <h4>${c.user.user_name}<span class='date'>  ${c.date_formatted}</span></h4>
            <p>${c.text}</p>
            `
            
            comment.append(card)    
        }

    }

    })

    
    
