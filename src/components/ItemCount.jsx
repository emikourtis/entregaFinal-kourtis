import { Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ItemCount = ({ cantidad, handleRestar, handleSumar, agregarAlCarrito }) => {
  const navigate = useNavigate()
  const SeguirComprando = () => {
    navigate('/');
  }

  return (
    <>
      <Row style={{ display: 'flex' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <Button style={{ width: '20%', marginRight: '20px' }} onClick={handleRestar}>-</Button>
          <p style={{
            marginTop: '10px',
            display: 'inline-block',
            padding: '8px 12px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#0d6efd',
            borderRadius: '40%'
          }}>{cantidad}</p>


          <Button style={{ width: '20%', marginLeft: '20px' }} onClick={handleSumar}>+</Button>

        </div>

        <Button style={{ marginTop: '5px', height: '55px' }} onClick={agregarAlCarrito} size="sm" variant="primary">
          AGREGAR AL CARRITO
        </Button>
        <Button style={{ marginTop: '5px', height: '55px' }} onClick={SeguirComprando} size="sm" variant="primary">
          SEGUIR COMPRANDO
        </Button>

      </Row >
    </>
  )
}

export default ItemCount;
