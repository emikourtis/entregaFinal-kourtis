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
    <div style={{ marginTop: '100px', marginLeft: '25px',  }}>
      <Card  style={{ maxWidth: '545px', display: 'flex', flexDirection: 'row' }}>
        {item && item.image && (
          <Card.Img
            style={{
              height: '450px',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
            variant="top"
            src={item.image}
            alt={item.name}
          />
        )}
        <Card.Body style={{}}>
          <Card.Title>{item.name} <hr/></Card.Title>
          <Card.Text>Precio: ${item.price} <hr/></Card.Text>
          <Card.Text>Descripcion: <br/>{item.description} <hr/> </Card.Text>
          <Card.Text>Categoria: {item.categoria}</Card.Text>
        </Card.Body>
        <Card.Footer>
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