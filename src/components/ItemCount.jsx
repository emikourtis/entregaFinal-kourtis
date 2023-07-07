import { Button, Row, Col } from 'react-bootstrap';

const ItemCount = ({ cantidad, handleRestar, handleSumar, agregarAlCarrito }) => {



  return (
    <>
      <Row style={{display: 'contents'}}>
        <div>
          <Col>
            <Button style={{width:'100%'}} onClick={handleRestar}>-</Button>
          </Col>
          <Col>
            <p style={{marginTop: '10px',
              display: 'inline-block',
              padding: '8px 12px',
              fontSize: '18px',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#0d6efd',
  borderRadius:'50%'}}>{cantidad}</p>
        </Col>
        <Col>
          <Button style={{width:'100%'}} onClick={handleSumar}>+</Button>
        </Col>
      </div>
    </Row >
      <Button style={{marginTop: '10px'}} onClick={agregarAlCarrito} size="sm" variant="primary">
        Agregar al carrito
      </Button>
    </>
  )
}

export default ItemCount;
