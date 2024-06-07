import TodoItem from "./TodoItem"

function Todos({todos}) {
  return (
    <div>
      {todos.map((todo) => (
          <TodoItem title={todo.title} key={todo.id}/>
        ))}
    </div>
  )
}

export default Todos