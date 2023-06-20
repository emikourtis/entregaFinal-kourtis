import React from 'react'

const ItemDetail = ( {item} ) => {
  return (
    <div>
      <div>
        <img src={item.image} alt={item.name} />
        <p> {item.name} </p>
        <p> {item.categoria} </p>
        <p>${item.precio} </p>
      </div>
      
    </div>
  )
}

export default ItemDetail;
