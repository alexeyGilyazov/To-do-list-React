// import Header from './Components/Header/Header';
// import Hero from './Components/Main/Hero';
import { useEffect, useState } from "react";
import Form from "./Form";
import { FaBeer } from "react-icons/fa";

function App() {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAlltodos] = useState(0)
  const [allComplete, setAllcomplete] =useState(0)


  useEffect(() => {
    setAllcomplete(todos.filter(todo => todo.done === true).length)
  }, [todos])

  const putTodo = (value) => {
    if (value) {
      setTodos([...todos, { id: Date.now(), text: value, dont: false }]);
      setAlltodos(allTodos + 1)
    } else {
      alert("Please enter text");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          done: !todo.done,
        };
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setAlltodos(allTodos - 1)
  };

  const cleatTodo = () => {
    setTodos([])
    setAlltodos(0)
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">To do list</h1>
        <Form putTodo={putTodo} />
        <ul className="todos">
          {todos.map((todo) => {
            return (
              <li
                className={todo.done ? "todo done" : "todo"}
                key={todo.id}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
                <FaBeer className="delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTodo(todo.id);
                  }}
                />
              </li>
            );
          })}
          <div className="info">
            <span>All todos {allTodos}</span>
            <span>All complete {allComplete}</span>
          </div>
          <button className="btn" onClick={cleatTodo} >Clear all</button>
        </ul>
      </div>
    </div>
  );
}

export default App;
