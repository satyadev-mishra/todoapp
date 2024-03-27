const store = {
  todos: [
  ],
};
const storeHandler = {
  get(target, property) {
    return target[property];
  },
  set(target, property, value) {
    target[property] = value;
    if(property=="todos"){
      window.dispatchEvent(new Event("todosChange"));
    }
    localStorage.setItem("store",JSON.stringify(store))
    return true;
  },
};
const todoProxy = new Proxy(store, storeHandler);
function addTodo(newTodo){
  todoProxy.todos=[...todoProxy.todos,newTodo];
}
function deleteTodo(taskId){
 todoProxy.todos = todoProxy.todos.filter((todo) => todo.id != taskId);
}
function toggleTodo(taskId,completed){
 todoProxy.todos = todoProxy.todos.map((todo) =>{
  if(todo.id==taskId){
    if(todo.completed){
      completed=false;
    }
    return{...todo,completed:completed}
  }else{
    return todo;
  }
 }
  
 );
}
export {addTodo,deleteTodo,toggleTodo};
export default todoProxy;
