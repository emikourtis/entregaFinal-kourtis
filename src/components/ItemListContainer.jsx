import { useEffect, useState } from 'react';
import { pedirDatos } from './pedirDatos';
import ItemList from './ItemList';

const ItemListContainer = ( { categoriaSeleccionada } ) => {
  
  const [productos, setProductos] = useState([]);
  
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    // Filtra los productos según la categoría seleccionada
    const productosPorCategoria = productos.filter(
      (producto) => producto.categoria === categoriaSeleccionada
    );
    
    // Actualiza el estado con los productos filtrados
    setProductosFiltrados(productosPorCategoria);
  }, [categoriaSeleccionada, productos]);

  useEffect(() => {
    pedirDatos()
      .then((res) =>{
        setProductos(res)
    })
  }, [])
  
  
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <ItemList productos={categoriaSeleccionada ? productosFiltrados : productos} />
    </div>
  );
};

export default ItemListContainer;