import React, { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { nroCarrito } = useContext(CartContext);
  return (
    <Button variant="light">
      <FontAwesomeIcon icon={faShoppingCart} />
      <Badge bg="secondary"> {nroCarrito()} </Badge>
    </Button>
  );
}

export default CartWidget;
