import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDoArr, setToDoArr] = useState([])
  const addTodo = (e) => {
    e.preventDefault();
    const newToDo = {
      toDoItem: toDo,
      complete: false
    };
    setToDoArr([...toDoArr, newToDo]);
    setTodo("");
  };

  

  const deleteToDo = (indexFromBelow) => {
    const filteredToDo = toDoArr.filter((toDo, idx) => {
      return indexFromBelow !== idx;
    });
    setToDoArr(filteredToDo)
  };

  const updateComplete = (idx) => {
    const toDo = toDo.map((toDo, index) => {
      if (idx === index){
        toDo.complete = !toDo.complete;
      }
      return toDo;
    });
  }

  

  
  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <label>
          To Do
          <input
          value={toDo}
          type="text"
          onChange={(e) => setTodo(e.target.value)} />{" "}
        </label>
        <button type="submit">SUBMIT</button>
      </form>
      <h2>To Do List</h2>
      {toDoArr.map((toDo, index) => {
        return (
        <div key={index}>
          <h2>{toDo.toDoItem}</h2>

          <input type="checkbox" onChange={() => updateComplete(toDo)}></input>
            
            
            
            <button
            onClick={() => deleteToDo(index)}
            style={{color: 'pink', backgroundColor: 'black'}}>DELETE
            </button>
          <hr />
        </div>
        );
      })}
    </div>
  );
}

export default App;
