import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";
import { useState } from "react";

export const TodoList = (props) => {
  const [sortMode, setSortMode] = useState("descending");
  const [newItem, setNewItem] = useState("");

  const onCheckClick = (id) => (ev) => {
    props.onTodoChecked(id, ev.target.checked);
  };

  const onAddClick = () => {
    props.onItemAdded(newItem);
  };

  const items = props.todos
    .sort((a, b) => {
      if (a.completed && !b.completed) {
        return sortMode === "descending" ? 1 : -1;
      } else {
        return sortMode === "descending" ? 1 : -1;
      }
    })
    .map((todo) => {
      return (
        <TodoItem
          text={todo.content}
          completed={todo.completed}
          onCheckClick={onCheckClick(todo.id)}
        />
      );
    });

  const onSortClick = (ev) => {
    ev.preventDefault();
    setSortMode(sortMode === "descending" ? "ascending" : "descending");
  };

  return (
    <div>
      <a href="#" onClick={onSortClick}>
        Sort by completed
      </a>
      <ul>{items}</ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(ev) => setNewItem(ev.target.value)}
        />
        <button onClick={onAddClick}>Add</button>
      </div>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onTodoChecked: PropTypes.func.isRequired,
  onItemAdded: PropTypes.func.isRequired,
};
