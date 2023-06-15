import logo from './logo.svg';
import './App.css';
import './Btn'

function App() {
  return (
    <div className="App">
      <Btn></Btn>
    </div>
  );
}

export default App;

function Btn () {
  return <button className="btn">Click me React</button>
}