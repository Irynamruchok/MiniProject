let urlParams = new URLSearchParams(window.location.search)
let postId = urlParams.get('id')

let container = document.createElement('div')
    container.classList.add('container')

 fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => {

       let postContainer = document.createElement('div')
           postContainer.classList.add('postContainer')

          for (const postKey in post) {
            let text = document.createElement('p')
                text.textContent = `${postKey} - ${post[postKey]}`
                postContainer.appendChild(text)
          }
                container.appendChild(postContainer)
                document.body.appendChild(container)
 });

 fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then((comments) =>{
        let commentContainer = document.createElement('div')
            commentContainer.classList.add('commentContainer')
          comments.forEach((comment) => {
              let commentBlock = document.createElement('div')
                  commentBlock.classList.add('commentBlock')
                 for (const commentKey in comment) {
                   let commentText = document.createElement('p')
                       commentText.textContent = `${commentKey} - ${comment[commentKey]}`
                       commentBlock.appendChild(commentText)
                 }
                       commentContainer.appendChild(commentBlock)
          });
                       container.appendChild(commentContainer)
 })
