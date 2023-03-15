import React, { useContext, useEffect } from 'react';
import { TODOSContext } from '../context/todoContext';
import { TODOItem } from './TODOItem';

export function TODOContainer() {
  const {
    state: { TODOS },
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  } = useContext(TODOSContext);

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseDown, handleMouseUp, handleMouseMove]);

  return (
    <div className="todo__container">
      {TODOS.map(({ id, name }) => {
        return <TODOItem key={id} name={name} />;
      })}
    </div>
  );
}
