import React, { useEffect, useRef, useState } from 'react'
import ItemCount from './ItemCount';
import { Card } from 'react-bootstrap';

const ItemDetail = ( {item} ) => {
  const cardRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      const height = cardRef.current.offsetHeight;
      setCardHeight(height);
    }
  }, []);
  return (
    <div>
      <Card ref={cardRef} style={{ maxWidth: '345px' }}>
      {item && item.image && (
          <Card.Img
            style={{
              height: cardHeight,
              maxHeight: '100%',
              objectFit: 'contain',
            }}
            variant="top"
            src={item.image}
            alt={item.name}
          />
        )}
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>${item.price}</Card.Text>
          <Card.Text>{item.categoria}</Card.Text>
        </Card.Body>
        
        <Card.Footer>
        <ItemCount />
        </Card.Footer>
      </Card>
      
      
    </div>
  )
}

export default ItemDetail;
