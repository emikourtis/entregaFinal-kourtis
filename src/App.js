import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Main from './components/pages/main';

function App() {
  return (
    <div>
      <Navbar />
      <Main />

      <Home />

    </div>


  );
}

export default App;