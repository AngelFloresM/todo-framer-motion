import {
  useState,
  createContext,
  useContext,
  useReducer,
  useEffect,
  useRef,
} from 'react';
// import TODOItem from './components/TODOItem';
import './App.css';

// Reducer

const initialState = {
  mouse: {
    y: 0,
    isMouseDown: false,
  },
  TODOs: [
    { id: 1, name: 'Learn React', isCompleted: false },
    { id: 2, name: 'Learn Firebase', isCompleted: false },
    { id: 3, name: 'Learn GraphQL', isCompleted: false },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'mousemove':
      if (!state.mouse.isMouseDown) return state;
      return { ...state, mouse: { ...state.mouse, y: action.payload } };
    case 'mousedown':
      return { ...state, mouse: { ...state.mouse, isMouseDown: true } };
    case 'mouseup':
      return { ...state, mouse: { ...state.mouse, isMouseDown: false } };
    default:
      return state;
  }
}

// Context

const TODOSContext = createContext();

function TODOSProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TODOSContext.Provider value={{ state, dispatch }}>
      {children}
    </TODOSContext.Provider>
  );
}

// TODO Container Component

function TODOContainer() {
  const { state, dispatch } = useContext(TODOSContext);

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      dispatch({ type: 'mousemove', payload: e.clientY });
    });

    document.addEventListener('mouseup', (e) => {
      dispatch({ type: 'mouseup' });
    });
    document.addEventListener('mousedown', (e) => {
      dispatch({ type: 'mousedown' });
      dispatch({ type: 'mousemove', payload: e.clientY });
    });

    return () => {
      document.removeEventListener('mousemove', (e) => {
        dispatch({ type: 'mousemove', payload: e.clientY });
      });

      document.removeEventListener('mouseup', (e) => {
        dispatch({ type: 'mouseup' });
      });
      document.removeEventListener('mousedown', (e) => {
        dispatch({ type: 'mousedown' });
      });
    };
  }, []);

  const {
    state: { TODOs },
  } = useContext(TODOSContext);

  return (
    <div className="todo__container">
      {TODOs.map(({ id, name }) => {
        return <TODOItem key={id} name={name} />;
      })}
    </div>
  );
}

// TODO Item Component

function TODOItem({ name }) {
  const { dispatch, state } = useContext(TODOSContext);
  const [isBeingDragged, setIsBeingDragged] = useState(false);
  const [currentMousePositionAtStart, setCurrentMousePositionAtStart] =
    useState(0);
  const itemRef = useRef(null);

  useEffect(() => {
    if (!state.mouse.isMouseDown) setIsBeingDragged(false);
  }, [state.mouse.isMouseDown]);

  function handleMouseDown(e) {
    setIsBeingDragged(true);
    setCurrentMousePositionAtStart(e.clientY);
  }

  return (
    <div
      className={`todo__item ${isBeingDragged ? 'todo__item--dragged' : ''}`}
      onMouseDown={handleMouseDown}
      ref={itemRef}
      style={
        isBeingDragged
          ? {
              transform: `translateY(${
                state.mouse.y - currentMousePositionAtStart
              }px)`,
            }
          : {transform: 'translateY(0px)'}
      }
    >
      <p className="todo__item-title">{name}</p>
    </div>
  );
}

// App Component

function App() {
  return (
    <div className="App">
      <h1>TODO App</h1>
      <TODOSProvider>
        <TODOContainer />
      </TODOSProvider>
    </div>
  );
}

export default App;
