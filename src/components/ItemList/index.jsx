import React from 'react'
import Item from '../Item'
import './style.css'


const ItemList = ({products}) => {
  return (
    <div>
        {products.map((product)=> {
            return( <item key={product.id} product={product} />)
    })}
    </div>
  )
}

export default ItemList;