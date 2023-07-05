const addTodo = document.querySelector(".add-todo")
const todoInput = document.querySelector(".todo")
const todoBtn = document.querySelector(".todo-btn")
const todoList = document.querySelector(".todo-list")
const todoInfo = document.querySelector(".info")

let toDos = []

todoForm.addEventListener("submit",handleSubmit)

function handleSubmit (e) {
  e.preventDefault()

  if (todoInput.value === "") { // Input에 아무것도 입력하지 않았을 때
    return
  }

  const newToDoObj = {
    text : todoInput.value,
    id : Date.now(),
    complete : false
  }

  toDos.push(newToDoObj)
  savedToDo()
  addTodoList(newToDoObj)
  todoInput.value = ""
}

function savedToDo () {
  localStorage.setItem("Todo", JSON.stringify(toDos))
}

function addTodoList(newToDoObj) {
  const li = document.createElement("li")
  li.id = newToDoObj.id
  const span = document.createElement("span")
  span.innerText = newToDoObj.text
  const button = document.createElement("button")
  const complete = document.createElement("input")
  complete.setAttribute("type","checkbox")
  todoList.appendChild(li)
  li.appendChild(span)
  li.appendChild(button)
  li.appendChild(complete)
  button.addEventListener("click",deleteTodo)
  complete.addEventListener("click" ,compelteTodo)

  newToDoObj.complete ? li.classList.add("complete") : li.classList.remove("complete")
  newToDoObj.complete ? complete.checked = true : complete.checked = false


}

function deleteTodo(e) {
  const li = e.target.parentElement
  li.remove()
  toDos = toDos.filter(todo => todo.id !== parseInt(li.id))
  savedToDo();


}

function compelteTodo(e) {
  const li = e.target.parentElement
  toDos.forEach( (todo) => {
    if ( todo.id == parseInt(li.id)) {
      todo.complete ? todo.complete = false : todo.complete = true
      savedToDo()
      todo.complete ? li.classList.add("complete") : li.classList.remove("complete")
    }
  })
  

}

const savedTodo = localStorage.getItem("Todo")

if (savedTodo) {
  toDos = JSON.parse(savedTodo)
  toDos.forEach((todo) => {
    addTodoList(todo)

  })
}



function filterAll () {
  for (let i=0; i<todoList.children.length; i++) {
    todoList.children[i].style.display ="block"
  }
}


function showCompleteTodo () {
  for (let i=0; i<todoList.children.length; i++) {
    if ( todoList.children[i].classList != 'complete' ) {
      todoList.children[i].style.display = "none"
    } else {
      todoList.children[i].style.display = "block"

    }
  }

  let completeIndex = toDos.filter((todo) => {
    return todo.complete == true
  })      
}

function noneCompleteTodo () {
  for (let i=0; i<todoList.children.length; i++) {
    if ( todoList.children[i].classList == 'complete' ) {
      todoList.children[i].style.display = "none"
    } else {
      todoList.children[i].style.display = "block"
    }
  }

  let completeIndex = toDos.filter((todo) => {
    return todo.complete == false
  })      
}