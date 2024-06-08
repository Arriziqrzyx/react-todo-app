import TodoItem from "./TodoItem"

function Todos({ todos, toggleCompleted }) {
  return (
    <div>
      {todos.map((todo) => (
          <TodoItem 
          key={todo.id} 
          todos={todo} 
          toggleCompleted={toggleCompleted} />
        ))}
    </div>
  )
}

export default Todos