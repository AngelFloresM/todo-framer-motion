import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

const defaultTODOs = [
  { id: 1, name: 'Learn React', isCompleted: false },
  { id: 2, name: 'Learn Firebase', isCompleted: false },
  { id: 3, name: 'Learn GraphQL', isCompleted: false },
];

function TODOList({ name }) {
  return (
    <motion.div className="todo__item" draggable layout>
      <p className="todo__item-title">{name}</p>
    </motion.div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="todo__container">
        <AnimatePresence>
          {defaultTODOs &&
            defaultTODOs.map((todo) => {
              return <TODOList key={todo.id} name={todo.name} />;
            })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
