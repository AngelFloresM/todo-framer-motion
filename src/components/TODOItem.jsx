import { useState, useEffect, useContext } from 'react';
import { TODOSContext } from '../context/todoContext';

export function TODOItem({ name }) {
  const {
    state: { mouse },
  } = useContext(TODOSContext);
  const [isBeingDragged, setIsBeingDragged] = useState(false);
  const [currentMousePositionAtStart, setCurrentMousePositionAtStart] =
    useState(0);

  useEffect(() => {
    if (!mouse.isMouseDown) setIsBeingDragged(false);
  }, [mouse.isMouseDown]);

  function handleMouseDown(e) {
    setIsBeingDragged(true);
    setCurrentMousePositionAtStart(e.clientY);
  }

  return (
    <div
      className={`todo__item ${isBeingDragged ? 'todo__item--dragged' : ''}`}
      onMouseDown={handleMouseDown}
      style={
        isBeingDragged
          ? {
              transform: `translateY(${
                mouse.y - currentMousePositionAtStart
              }px)`,
            }
          : { transform: 'translateY(0px)' }
      }
    >
      <p className="todo__item-title">{name}</p>
    </div>
  );
}
