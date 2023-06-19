import './App.css';
// import Header from './Components/Header/Header';
// import Hero from './Components/Main/Hero';


import { useState } from 'react';
import Header from './ToDolIst/Components/Header/Header';
import AddToDo from './ToDolIst/Components/AddToDo/AddToDo';
import ToDoList from './ToDolIst/Components/ToDoLIst/ToDoList';
// const headerData = {



//   siteTitle : 'My React Application',
//   nav : [
//     {'link': '#', 'text': 'About'},
//     {'link': '#', 'text': 'Menu'},
//     {'link': '#', 'text': 'Contact'},
//     {'link': '#', 'text': 'Info'}
//   ]
// }


function App() {

  const [todo, setTodo] = useState ([
    {
    id: 1,
    title: 'first todo',
    status: true
  },
  {
    id: 2,
    title: 'second todo',
    status: true
  },
  {
    id: 3,
    title: 'third todo',
    status: true
  }]
  )

  console.log(todo);
  

  return (
    <div className="App">
      <Header />
      <AddToDo />
      <ToDoList todo = {todo} setToDo = {setTodo} />
    </div>
  );

}


export default App;
