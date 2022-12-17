const inputtdl = document.querySelector('.textarea')
const buttontdl = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')

function clickButton(e) {
    e.preventDefault()
    createTodo()
}

// adding todoList
function createTodo() {
    const itemall = document.createElement('div')
    console.log('itemall');
    itemall.classList.add('itemall')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputtdl.value
    itemall.appendChild(item)

    if (inputtdl.value === '') return

    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)

    // const updatebutton = document.createElement("button")
    // updatebutton.innerHtml ='<i class ="fa-solid fa-pen-to-square"></i>'
    // updatebutton.classList.add("update-button")
    // itemall.appendChild(updatebutton)

    listtdl.appendChild(itemall)
    inputtdl.value = ''
}

// checking and delete todoList 
function checkDelete(e) {
    const item = e.target

    // check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }

    if(item.classList[0]==='update-Button') {
        todoList = item.parentElement
        todolist.update()
      }
}

// update the todo list

function updateTodoList(e){
    const item = e.target

    //update
    if(item.classList[0]==='update-Button') {
      todoList = item.parentElement
      todolist.update()
    }
}

buttontdl.addEventListener('click', clickButton)
listtdl.addEventListener('click', checkDelete)
listttdl.addEventListener('click',updateTodoList)