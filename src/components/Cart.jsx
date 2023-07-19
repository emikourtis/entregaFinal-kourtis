import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import './cart.css'
import { useNavigate } from 'react-router-dom'
import { Table } from 'react-bootstrap'


const Cart = () => {
  const { carrito, setCarrito, totalCarrito, vaciarCarrito } = useContext(AppContext)
  const navigate = useNavigate()

  const handleVaciar = () => {
    vaciarCarrito()
  }
  const handleComprar = () => {
    navigate('/finalizarCompra')
  }

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter(producto => producto.id !== id);
    setCarrito(nuevoCarrito);
  };

  const validation = ()=>{
    if(carrito.length === 0){
      return false
    }else{
      return true
    }
  }
  return (
    <div style={{ marginTop: '100px', marginLeft: '100px', color: "white" }}>
      <h1>Carrito</h1>

      {
        carrito.map((prod) => (
          <div key={prod.id} style={{ display: 'flex' }}>
            <Table style={{ width: '60%' }} striped bordered hover>
              <thead>
                <tr style={{ color: 'white' }}>
                  <th style={{ width: "45%" }}>Producto</th>
                  <th style={{ width: "15%" }}>Precio</th>
                  <th style={{ width: "10%" }}>Cantidad</th>
                  <th style={{ width: "30%" }}>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ color: 'white' }}>{prod.name}</td>
                  <td style={{ color: 'white' }}>${prod.price} </td>
                  <td style={{ color: 'white' }}> {prod.cantidad}</td>
                  <td style={{ color: 'white' }}>{prod.price * prod.cantidad}</td>
                </tr>
              </tbody>
            </Table>
            <button onClick={() => eliminarProducto(prod.id)} className='vaciar' style={{ marginLeft: '5px' }}>Eliminar</button>
          </div>
        )
        )
      }
      <h3>Total Compra: ${totalCarrito()} </h3>
      <button className='vaciar' disabled={!validation()} onClick={handleComprar} >COMPRAR</button>
      <button className='vaciar' disabled={!validation()} onClick={handleVaciar} >Vaciar Carrito</button>
    </div>
  )
}

export default Cart
