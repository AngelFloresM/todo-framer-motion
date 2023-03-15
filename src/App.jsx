import React from 'react';
// import TODOItem from './components/TODOItem';
import { TODOSProvider } from './context/todoContext';
import { TODOContainer } from './components/TODOContainer';
import './App.css';

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
