fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
       let mainContainer = document.createElement('div')
       let main = document.createElement('div')
           mainContainer.classList.add('mainContainer')
           main.classList.add('main')


          users.forEach(user =>{

            let userBlock = document.createElement('div')
                userBlock.classList.add('userBlock')
            let userName = document.createElement('h3')
                userName.classList.add('userName')
                userName.textContent = `${user.id}. ${user.name}`

            let buttonBlock = document.createElement('div')
                buttonBlock.classList.add('buttonBlock')
            let button = document.createElement('button')
                button.classList.add('button')
                button.textContent = 'Learn more'

            let link = document.createElement('a')
                link.classList.add('link')
                link.href = `user-details.html?id=${user.id}`

                link.appendChild(button)
                buttonBlock.appendChild(link)
                userBlock.appendChild(userName)
                userBlock.appendChild(buttonBlock)
                main.appendChild(userBlock)
          })
               mainContainer.appendChild(main)
               document.body.appendChild(mainContainer)
    })

    .catch(error => {
    console.error('Error:', error);
    });