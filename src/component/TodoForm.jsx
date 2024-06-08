import React, { useState } from 'react'

function TodoForm( {addTodo} ) {

    const [title, setTitle] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(title);
        setTitle('')
    };
    

    return (
        <div className="todo-form">
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Add your Todo"
                    className="todo-input"
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                />
                <button type="submit" className="todo-submit">+</button>
            </form>
        </div>
    );

}
export default TodoForm