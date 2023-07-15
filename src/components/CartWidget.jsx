import React, { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';


const CartWidget = () => {
  const { nroCarrito } = useContext(AppContext);
  
  const navigate = useNavigate()
  
  const handleCart = () => {
    navigate('/cart')
  }
  
  return (
    <>
    
      <Button onClick={handleCart}  variant="light">
      <FontAwesomeIcon icon={faShoppingCart} />
      <Badge bg="secondary"> {nroCarrito()} </Badge> 
    </Button>
    </>
   
  );
}

export default CartWidget;
