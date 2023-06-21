import React from 'react'
import Item from './Item';

const ItemList = ({ productos, titulo }) => {
  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center', marginBottom: '50px', marginTop: '60px' }}> {titulo} </h1>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
      </div>
    </div>
  );
};

export default ItemList;
