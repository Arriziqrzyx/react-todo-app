import React from 'react'

function TodoItem(todo) {
  const getTodoTitleStyle = () => {
    if(todo.completed === true) {
      return {textDecoration: 'line-through'};
    } else {
      return {textDecoration: 'none'};
    }
  };

  return (
    <div className="todo-item-container">
      <input type="checkbox" className="todo-checkbox" onChange={() => todo.toggleCompleted(todo.id)} />
      <p style={getTodoTitleStyle()} className="todo-item">{todo.title}</p>
      <button className='todo-delete' onClick={() => todo.deleteTodo(todo.id)}><i className="uil uil-trash-alt"></i></button>
    </div>
    
  );
}

export default TodoItem