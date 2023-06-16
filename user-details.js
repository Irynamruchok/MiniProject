let urlParams = new URLSearchParams(window.location.search)
let userId = urlParams.get('id')

let container = document.createElement('div')
    container.classList.add('container')
let main = document.createElement('div')
    main.classList.add('main')
let heading = document.createElement('h2')
    heading.classList.add('heading')
    heading.textContent = 'Information About User'

 fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
       let mainBlock = document.createElement('div')
           mainBlock.classList.add('mainBlock')

       let block = document.createElement('div')
           block.classList.add('block')
           block.appendChild(heading)

        for (const userKey in user) {
            if (typeof user[userKey] === 'object') {
                let nestedInfo = document.createElement('div')
                nestedInfo.classList.add('nestedInfo')
                nestedInfo.textContent = userKey + ':'

                for (const nestedKey in user[userKey]) {
                    if (typeof user[userKey][nestedKey] === 'object') {
                        let nestedInfo2 = document.createElement('div')
                            nestedInfo2.classList.add('nestedInfo2')
                            nestedInfo2.textContent = nestedKey +':'
                            nestedInfo.appendChild(nestedInfo2)

                    for (const key in user[userKey][nestedKey]){
                        let geoInfo = document.createElement('div')
                            geoInfo.classList.add('geoInfo')
                            geoInfo.textContent = `${key} : ${user[userKey][nestedKey][key]}`
                            nestedInfo2.appendChild(geoInfo)
                    }

                    }
                    else {
                        let nestedText = document.createElement('div')
                            nestedText.classList.add('nestedText')
                            nestedText.textContent = `  ${nestedKey} : ${user[userKey][nestedKey]}`
                            nestedInfo.appendChild(nestedText)
                            block.appendChild(nestedInfo)
                    }
                }
            }

            else {
                let infoText = document.createElement('div')
                    infoText.textContent = `${userKey} : ${user[userKey]}`
                    block.appendChild(infoText)
            }
        }

        mainBlock.appendChild(block)
        main.appendChild(mainBlock)
        container.appendChild(main)
        document.body.appendChild(container)


       let buttonBlock = document.createElement('div')
           buttonBlock.classList.add('buttonBlock')
       let viewButton = document.createElement('button')
           viewButton.classList.add('viewButton')
           viewButton.textContent = 'View a user`s posts'
       let titleBlock = document.createElement('div')
           titleBlock.classList.add('titleBlock')
       let titles = document.createElement('div')
           titles.classList.add('titles')
       let titleHead = document.createElement('div')
           titleHead.classList.add('titleHead')
       let title = document.createElement('h2')
           title.classList.add('title')
           title.textContent = 'User`s Posts'
           titleBlock.style.display = 'none';
       let visibleTitles = false

           viewButton.addEventListener('click',function () {
             if (visibleTitles){
                 titleBlock.style.display = 'none'
              }
             else {
                 titleBlock.style.display = 'flex'
              }
            visibleTitles =! visibleTitles

               fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                   .then((response) => response.json())
                   .then((posts) => {
                       titles.innerHTML = ''
                       posts.forEach((post) =>{

                           let link = document.createElement('a')
                               link.classList.add('link')
                               link.href = `post-details.html?id=${post.id}`
                           let button = document.createElement('button')
                               button.classList.add('titlesButton')
                               button.textContent = post.title

                               titleHead.appendChild(title)
                               link.appendChild(button)
                               titles.appendChild(link)
                               titleBlock.appendChild(titleHead)
                               titleBlock.appendChild(titles)
                       })
               })
           })

        buttonBlock.appendChild(viewButton)
        main.appendChild(buttonBlock)
        mainBlock.appendChild(titleBlock)
        main.appendChild(mainBlock)
    })
