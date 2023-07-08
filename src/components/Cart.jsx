import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import './cart.css'

const Cart = () => {
  const {carrito, totalCarrito, vaciarCarrito} = useContext(AppContext)

  const handleVaciar = () =>{
    vaciarCarrito()
  }

  return (
    <div style={ {marginTop: '100px', marginLeft: '100px' }}>
      <h1>Carrito</h1>

      {
        carrito.map((prod) =>(
          <>
          <h3>{prod.name} </h3>
          <p>Precio: ${prod.price} </p>
          <p>Cantidad: {prod.cantidad} </p>
          <p>Precio Total: {prod.price * prod.cantidad} </p>
          <br />
          </>
        )
        )
      }
      <h3>Total Compra: {totalCarrito()} </h3>
      <hr/>
      <button className='vaciar' onClick={handleVaciar} >Vaciar Carrito</button>
    </div>
  )
}

export default Cart
