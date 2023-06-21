import React from 'react';
import NavBar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';

function App() {
  
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  return (
    <div>
      <BrowserRouter>
      <NavBar categoriaSeleccionada={categoriaSeleccionada}
          setCategoriaSeleccionada={setCategoriaSeleccionada} />
      
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/item/:categoria' element={<ItemListContainer />} />
          
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;