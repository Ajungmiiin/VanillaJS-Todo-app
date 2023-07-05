const loginForm = document.querySelector(".login-form")
const inputEl = document.querySelector(".login")
const loginBtn = document.querySelector(".login-btn")
const greeting = document.querySelector(".greeting")
const error = document.querySelector(".error")
const todoForm = document.querySelector(".todo-app")
const HIDDEN = "hidden"

loginForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const username = inputEl.value

  if (!username) {
    error.classList.remove(HIDDEN)
    error.innerText = "Input is required."
  } else if ( username.length < 2 ) {
    error.classList.remove(HIDDEN)
    error.innerText = "You must enter at least 2 characters."
  } else if ( username ) {
    error.classList.add(HIDDEN)
    loginForm.style.display = "none"
  }

  localStorage.setItem("user", username)
  inputEl.value = ""

  todoForm.classList.remove(HIDDEN)
  greeting.innerText = `Hello ${localStorage.getItem("user")} !`
})

if (localStorage.getItem("user")) {
  loginForm.style.display = "none"
  todoForm.classList.remove(HIDDEN)
  greeting.innerText = `Hello ${localStorage.getItem("user")} !`
}
