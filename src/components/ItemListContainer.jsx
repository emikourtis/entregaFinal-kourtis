import { useEffect, useState } from 'react';
import { pedirDatos } from './pedirDatos';
import ItemList from './ItemList';

const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);
  
 

  useEffect(() => {
    pedirDatos()
      .then((res) =>{
        setProductos(res)
    })
  }, [])
  
  
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <ItemList productos={ productos } />
    </div>
  );
};

export default ItemListContainer;