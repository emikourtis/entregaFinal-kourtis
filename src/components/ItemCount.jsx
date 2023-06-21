import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const ItemCount = ( {item} ) => {

    const [cantidad, setCantidad] = useState(1);
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

  return (
    <>
    <div>
        <Button onClick={handleRestar} >-</Button>
        <p>{cantidad}</p>
        <Button onClick={handleSumar}>+</Button>
    </div>
    <Button size="sm" variant="primary">Agregar al carrito</Button>
      
    </>
  )
}

export default ItemCount;
