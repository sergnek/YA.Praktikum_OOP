import TodoList from './TodoList.js'
import TodoListItem from './TodoListItem.js'
import TodoForm from './TodoForm.js'

const todoList = new TodoList('#todolist')
const todoForm = new TodoForm('#todo-form', (data) => {
  const card = new TodoListItem(data, todoList).getCard();
  todoList.addCard(card);
})
