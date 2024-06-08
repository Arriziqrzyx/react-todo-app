import { useState } from 'react';
import './App.css'
import Todos from './component/Todos';


const DUMMY = [
  {
    id: 1,
    title: 'Finish Progate React Course',
    completed: false,
  },
  {
    id: 2,
    title: 'Have lunch with Guru Domba',
    completed: false,
  },
  {
    id: 3,
    title: 'Study React with Ninja Ken',
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(DUMMY);

  const toggleCompleted = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })

    setTodos(updateTodos);
    console.log('toggle dipanggil', id);
  };

  const deleteTodo = (id) => {
    const filterDeleted = todos.filter((todo) => {
      return todo.id != id;
    });
    setTodos(filterDeleted);
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <Todos 
      todos={todos} 
      toggleCompleted={toggleCompleted} 
      deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App
