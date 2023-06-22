import { useEffect, useState } from 'react';
import { pedirDatos } from './pedirDatos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos")
  const categoria = useParams().categoria || 'todos';
  console.log(categoria)
 

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        console.log(res);
        let productosFiltrados = res;
        if (categoria && categoria !== 'todos') {
          productosFiltrados = res.filter((prod) => prod.categoria === categoria);
          setTitulo(categoria);
        } else {
          setTitulo('Productos');
        }
        setProductos(productosFiltrados);
      });
  }, [categoria]);
  
  
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <ItemList productos={ productos } titulo={titulo}  />
    </div>
  );
};

export default ItemListContainer;