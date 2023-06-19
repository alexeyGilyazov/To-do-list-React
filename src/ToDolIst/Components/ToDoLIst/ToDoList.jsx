import React from "react";

function ToDoList({ todo, setTodo }) {

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !==id)
        setTodo(newTodo)
    }
    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id === id) {
                item.status = !item.status
            }
        })
        setTodo(newTodo)
    }

    return (
        <div>
            {
                todo.map( item => (
                    <div key={item.id}>
                        <div>{item.title}</div>
                        <button onClick={() => deleteTodo(item.id)}>Delete Task</button>
                        <button onClick={() => statusTodo(item.id)}>Close Task</button>
                    </div>
                ))
            }
        </div>
    )
}


        export default ToDoList