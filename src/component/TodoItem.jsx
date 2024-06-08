import React from 'react'

function TodoItem({ todos, toggleCompleted }) {
  const getTodoTitleStyle = () => {
    if(todos.completed === true) {
      return {textDecoration: 'line-through'};
    } else {
      return {textDecoration: 'none'};
    }
  };

  return (
    <div className="todo-item-container">
      <input type="checkbox" className="todo-checkbox" onChange={() => toggleCompleted(todos.id)} />
      <p style={getTodoTitleStyle()} className="todo-item">{todos.title}</p>
    </div>
    
  );
}

export default TodoItem