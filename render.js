import store from "./store.js";
function render() {
  const todos = document.querySelector(".todos");
  const todoElement = store.todos.map(
    (todo) => `<li class="added-todo-list" data-id=${todo.id}>
          <p class=${todo.completed && "complete"}>${todo.title}</p>
          <div class="todo-tools">
            <!-- <input type="checkbox"/> -->
            <div class="checkmark">
              <div class=${todo.completed && "todo-done"}></div>
            </div>
            <i class="fa-regular fa-pen-to-square todo-edit"></i>
            <i class="fa-regular fa-trash-can todo-delete"></i>
          </div>
        </li>`
  );
  todos.innerHTML = todoElement;
}
export default render;
