import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount';
import { Card } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';


const ItemDetail = ({ item }) => {

  const { agregarAlCarrito } = useContext(AppContext);

  const [cantidad, setCantidad] = useState(1);
  
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }
  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }

  const handleAgregar = () => {
    agregarAlCarrito(item, cantidad);
  }

  
  return (
    <div style={{ marginTop: '100px', marginLeft: '35px', marginBottom:'30px', width:'70%' }}>
      <Card  style={{ maxWidth: '80%', display: 'flex', justifyContent:'center', alignItems:'center' }}>
        {item && item.image && (
          <Card.Img
            style={{
              height: '30%',
              width: '50%'
              
            }}
            variant="top"
            src={item.image}
            alt={item.name}
          />
        )}
        <Card.Body style={{textAlign: 'center'}}>
          <Card.Title style={{fontSize:'25px'}}>{item.name} </Card.Title>
          <Card.Text  style={{fontSize:'20px'}}>Precio: ${item.price} </Card.Text>
          <Card.Text>Descripcion: <br/>{item.description} </Card.Text>
          <Card.Text>Categoria: {item.categoria}</Card.Text>
        </Card.Body>
        <Card.Footer style={{width:'100%', marginBottom:'35px'}}>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={handleAgregar}
            agregarAlCarrito={() => {
              agregarAlCarrito(item, cantidad);
            }}
          />
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ItemDetail;