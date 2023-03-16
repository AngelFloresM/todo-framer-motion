import React from 'react';
import { TODOSProvider } from './context/todoContext';
import { TODOContainer } from './components/TODOContainer';
import { Form } from './components/Form';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TODO App</h1>
      <TODOSProvider>
        <Form />
        <TODOContainer />
      </TODOSProvider>
    </div>
  );
}

export default App;
