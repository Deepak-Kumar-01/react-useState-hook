import { useState } from "react";
import "./App.css";

function TodoCard(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <h5>{props.description}</h5>
      <p>{props.isDone ? "Task is done" : "Task is not done"}</p>
    </div>
  );
}
function App() {
  const [todos, setTodos] = useState([]);
  //fn to add todos
  function addTodo() {
    let newArray = [];
    for (let i = 0; i < todos.length; i++) {
      newArray.push(todos[i]);
    }
    newArray.push({
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      isDone: true,
    });
    setTodos(newArray);
  }
  return (
    <div>
      <input id="title" type="text" placeholder="title"></input>
      <input id="description" type="text" placeholder="description"></input>
      <br />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo) => {
        return (
          <TodoCard
            title={todo.title}
            description={todo.description}
            isDone={todo.isDone}
          />
        );
      })}
    </div>
  );
}
export default App;
