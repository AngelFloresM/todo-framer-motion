import { useState, useRef } from 'react';
import TODOItem from './components/TODOItem';
import './App.css';

const defaultTODOs = [
  { id: 1, name: 'Learn React', isCompleted: false },
  { id: 2, name: 'Learn Firebase', isCompleted: false },
  { id: 3, name: 'Learn GraphQL', isCompleted: false },
];

function App() {
  const containerRef = useRef(null);
  const [todos, setTodos] = useState(defaultTODOs);

  return (
    <div className="App">
      <div className="todo__container" ref={containerRef}>
        {defaultTODOs.map(({ id, name }) => {
          return (
            <TODOItem
              key={id}
              name={name}
              id={id}
              setTodos={setTodos}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
