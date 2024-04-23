import { useState } from "react";
import "./styles.css";
import TodoItem from "./TodoItem";
function App() {
  const [newTodoName, setNewTodoName] = useState("");
  const [todo, setNewTodo] = useState([]);

  function addNewTodo() {
    if (newTodoName === "") return;
    setNewTodo((curr) => {
      return [
        ...curr,
        { name: newTodoName, completed: false, id: crypto.randomUUID() },
      ];
    });
    setNewTodoName("");
  }
  function toggleTodo(todoId, completed) {
    setNewTodo((curr) => {
      return curr.map((todo) => {
        if (todo.id === todoId)
          return {
            ...todo,
            completed,
          };
        return todo;
      });
    });
  }
  function deleteTodo(todoId) {
    setNewTodo((curr) => {
      return curr.filter((todo) => {
        return todo.id != todoId;
      });
    });
  }
  return (
    <>
      <ul id="list">
        {todo.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          );
        })}
      </ul>
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
          id="todo-input"
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </>
  );
}

export default App;
