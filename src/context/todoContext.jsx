const initialState = {
  todos: [
    { id: 1, name: 'Learn React', isCompleted: false },
    { id: 2, name: 'Learn Firebase', isCompleted: false },
    { id: 3, name: 'Learn GraphQL', isCompleted: false },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter((todo) => todo.id !== action.payload);
    case 'toggle':
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    default:
      return state;
  }
}
