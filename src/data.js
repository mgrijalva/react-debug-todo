// DO NOT MODIFY THIS FILE

let todos = [
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

// a function that pretends to call and API and return data
export const fetchTodos = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(todos);
    }, 500);
  });
};

export const updateTodo = (id, checked) => {
  return new Promise((res) => {
    setTimeout(() => {
      todos = todos.map((t) => {
        return {
          ...t,
          completed: t.id === id ? checked : t.completed,
        };
      });
      res('ok')
    }, 500);
  });
};
