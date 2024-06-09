import React, { useContext } from 'react'
import { TodoContext } from '../App'

const TodoItem = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext)

  const getTodoTitleStyle = () => {
    return { textDecoration: todo.completed ? 'line-through' : 'none' }
  }

  return (
    <div className="todo-item-container">
      <input type="checkbox" className="todo-checkbox" checked={todo.completed} onChange={() => toggleCompleted(todo.id)} />
      <p style={getTodoTitleStyle()} className="todo-item">{todo.title}</p>
      <button className='todo-delete' onClick={() => deleteTodo(todo.id)}><i className="uil uil-trash-alt"></i></button>
    </div>
  );
}

export default TodoItem