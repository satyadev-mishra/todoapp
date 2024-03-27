import render from "./render.js";
import store from "./store.js";
import { addTodo, deleteTodo, toggleTodo } from "./store.js";
window.addEventListener("todosChange", () => {
  render();
});
//try to get from local storage
const storeFromLocalStorage=JSON.parse(localStorage.getItem("store"));
if(storeFromLocalStorage?.todos.length>0){
    store.todos=storeFromLocalStorage.todos;
}
render();
const form = document.querySelector("#form");
const inputTask = document.querySelector("#inputTask");
const addedTodos = document.querySelector(".todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTodoValue = (inputTask.value + "").trim();
  if (newTodoValue !== "") {
    const newTodo = {
      id: crypto.randomUUID(),
      title: newTodoValue,
      completed: false,
    };
    addTodo(newTodo);
  }
  form.reset();
});
addedTodos.addEventListener("click", (e) => {
  // const taskId=e.target.parentElement.parentElement.dataset.id;
  const element = e.target;
  if (element.classList.contains("todo-delete")) {
    const taskId = element.closest(".added-todo-list").dataset.id;
    deleteTodo(taskId);
  }
  if (
    e.target.classList.contains("checkmark") ||
    e.target.classList.contains("todo-done")
  ) {
    const taskId = element.closest(".added-todo-list").dataset.id;
    const completed = true;
    toggleTodo(taskId, completed);
  }
  if (e.target.classList.contains("todo-edit")) {
    const taskId = element.closest(".added-todo-list").dataset.id;
    editTodo(taskId);
    console.log("hello edit");
  }
});
