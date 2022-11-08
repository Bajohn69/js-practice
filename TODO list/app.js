let add = document.querySelector('form button')
let section = document.querySelector('section')

add.addEventListener('click', e => {
    // console.log(e);

    // 防止預設行為(submit)
    e.preventDefault()

    // get the input values 取職
    // console.log(e.target.parentElement);
    let form = e.target.parentElement
    // console.log(form.children);
    let todoText = form.children[0].value
    let todoMonth = form.children[1].value
    let todoDate = form.children[2].value
    // console.log(todoText, todoMonth, todoDate);

    if(todoText === ''){
        alert('Please Enter some Text.')
        return // 下面的事就不做了所以 return (沒有要回傳任何東西)
    }

    // create a todo item
    let todo = document.createElement('div')
    todo.classList.add('todo')
    let text = document.createElement('p')
    text.classList.add('todo-text')
    text.innerText = todoText
    let time = document.createElement('p')
    time.classList.add('todo-time')
    time.innerText = todoMonth + '/' + todoDate
    todo.appendChild(text)
    todo.appendChild(time)

    // create green check and red trash can
    let completeButton = document.createElement('button')
    completeButton.classList.add('complete')
    completeButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    completeButton.addEventListener('click', e => {
        let todoItem = e.target.parentElement
        todoItem.classList.toggle('done')
        // console.log(e.target.parentElement);
    })

    let trashButton = document.createElement('button')
    trashButton.classList.add('trash')
    trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    trashButton.addEventListener('click', e => {
        let todoItem = e.target.parentElement

        todoItem.addEventListener('animationend', () => {
            todoItem.remove() // 動畫結束完才執行
        })

        todoItem.style.animation = 'scaleDown 0.3s forwards'
        // todoItem.remove() 不能放在這
        // console.log(e.target.parentElement);
    })

    todo.appendChild(completeButton)
    todo.appendChild(trashButton)

    todo.style.animation = 'scaleUp 0.3s forwards'

    form.children[0].value = '' // clear the text input
    form.children[1].value = ''
    form.children[2].value = ''

    section.appendChild(todo)


})