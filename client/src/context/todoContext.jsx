import React, { createContext, useState } from 'react';

export const TODOSContext = createContext();

export function TODOSProvider({ children }) {
  const [state, setState] = useState({
    mouse: {
      y: 0,
      isMouseDown: false,
    },
    TODOS: [
      { id: 1, name: 'Learn React', isCompleted: false },
      { id: 2, name: 'Learn Firebase', isCompleted: false },
      { id: 3, name: 'Learn GraphQL', isCompleted: false },
    ],
  });

  function handleMouseDown(e) {
    setState({
      ...state,
      mouse: {
        y: e.clientY,
        isMouseDown: true,
      },
    });
  }

  function handleMouseUp(e) {
    setState({
      ...state,
      mouse: {
        ...state.mouse,
        isMouseDown: false,
      },
    });
  }

  function handleMouseMove(e) {
    if (!state.mouse.isMouseDown) return;
    setState({
      ...state,
      mouse: {
        ...state.mouse,
        y: e.clientY,
      },
    });
  }

  function handleAddNewTODO(newTODO){
    const newTODOS = [...state.TODOS, newTODO];
    setState({
      ...state,
      TODOS: newTODOS
    });
  }

  return (
    <TODOSContext.Provider
      value={{ state, handleMouseDown, handleMouseUp, handleMouseMove, handleAddNewTODO }}
    >
      {children}
    </TODOSContext.Provider>
  );
}
