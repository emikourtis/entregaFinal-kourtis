
import NavBar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { useState } from 'react';
import Cart from './components/Cart';
import ContextProvider from './context/AppContext';

function App() {
  
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  

  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <NavBar
            categoriaSeleccionada={categoriaSeleccionada}
            setCategoriaSeleccionada={setCategoriaSeleccionada}
          />

          <Routes>
            <Route
              path="/"
              element={<ItemListContainer />} />
            <Route
              path="/item/:id"
              element={<ItemDetailContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route
              path="/cart"
              element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;