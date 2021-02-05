// DO NOT MODIFY THIS FILE
import "./App.css";
import { useEffect, useState } from "react";
import { TodoList } from "./components/TodoList";
import { fetchTodos, updateTodo } from "./data";

const initialTodoData = [
  {
    id: 1,
    content: "buy milk",
    completed: false,
  },
  {
    id: 2,
    content: "Take out trash",
    completed: false,
  },
  {
    id: 3,
    content: "Fix bugs",
    completed: false,
  },
  {
    id: 4,
    content: "Cash the check from Sally",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(initialTodoData);
  }, []);

  const onTodoChecked = (id, checked) => {
    setTodos(
      todos.map((t) => {
        return {
          ...t,
          completed: t.id === id ? checked : t.completed,
        };
      })
    );
  };

  const onItemAdded = (newItem) => {
    setTodos(
      todos.concat({
        id: Math.random() * 1000000,
        completed: false,
        content: newItem,
      })
    );
  };

  const style = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <div style={style}>
      <h1>Todos</h1>
      <TodoList
        todos={todos}
        onItemAdded={onItemAdded}
        onTodoChecked={onTodoChecked}
      />
    </div>
  );
}

export default App;
