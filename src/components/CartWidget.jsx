import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <Button variant="light">
      <FontAwesomeIcon icon={faShoppingCart} />
      <Badge bg="secondary">2</Badge>
    </Button>
  );
}

export default CartWidget;
