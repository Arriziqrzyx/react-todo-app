import TodoItem from "./TodoItem"

function Todos({ todos, toggleCompleted, deleteTodo }) {
  return (
    <div>
      {todos.map((todo) => (
          <TodoItem 
          completed={todo.completed}
          title={todo.title}
          id={todo.id}
          key={todo.id} 
          toggleCompleted={toggleCompleted} 
          deleteTodo={deleteTodo}
          />
        ))}
    </div>
  )
}

export default Todos