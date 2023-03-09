import { useState, useRef, useEffect } from 'react';

export default function TODOItem({ name, id, setTodos }) {
  const [isDragging, setIsDragging] = useState(false);
  const [currentMousePositionAtStart, setCurrentMousePositionAtStart] =
    useState(0);
  const itemRef = useRef(null);

  useEffect(() => {
    const itemCenterWithinContainer = itemRef.current.offsetTop + itemRef.current.offsetHeight / 2;
    console.log(itemCenterWithinContainer);
  }, []);

  function handleMouseMove(e) {
    if (!isDragging) return;
    e.currentTarget.style.transform = `translateY(${
      e.clientY - currentMousePositionAtStart
    }px)`;
  }

  function handleMouseDown(e) {
    setCurrentMousePositionAtStart(e.clientY);
    setIsDragging(true);
  }

  function handleMouseUp(e) {
    setIsDragging(false);
    e.currentTarget.style.transform = `translateY(0px)`;
  }

  return (
    <div
      value={name}
      id={name}
      className={`todo__item ${isDragging ? 'todo__item--dragging' : ''}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      // onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      ref={itemRef}
    >
      <p className="todo__item-title">{name}</p>
    </div>
  );
}
