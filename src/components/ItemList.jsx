import React from 'react'
import CardModal from './Item'

const ItemList = ({ productos }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>Productos</h1>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        {productos.map((producto) => (
        <CardModal key={producto.id} producto={producto} />
      ))}
      </div>
    </div>
  );
};

export default ItemList;
