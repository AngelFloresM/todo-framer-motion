import React, { useState, useContext } from 'react';
import { TODOSContext } from '../context/todoContext';

export const Form = () => {
  const [todo, setTodo] = useState('');
  const { handleAddNewTODO } = useContext(TODOSContext);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(!todo) return;
    const newTODO = {
      id: Date.now(),
      name: todo,
      isCompleted: false,
    };
    handleAddNewTODO(newTODO);
    setTodo('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">TODO</label>
        <input type="text" onChange={handleInputChange} value={todo} required/>
        <button type="submit">Add TODO</button>
      </form>
    </div>
  );
};
