import { Button, Row, Col } from 'react-bootstrap';

const ItemCount = ( {cantidad, handleRestar, handleSumar, agregarAlCarrito } ) => {



  return (
    <>
     <Row>
        <Col>
          <Button onClick={handleRestar}>-</Button>
        </Col>
        <Col>
          <p>{cantidad}</p>
        </Col>
        <Col>
          <Button onClick={handleSumar}>+</Button>
        </Col>
      </Row>
      <Button onClick={ agregarAlCarrito } size="sm" variant="primary">
        Agregar al carrito
      </Button>
    </>
  )
}

export default ItemCount;
