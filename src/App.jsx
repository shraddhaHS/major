import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RootRouter from './router/root.router';

function App() {

  return (
    <>
      <BrowserRouter>
          <div>
            <RootRouter />
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
