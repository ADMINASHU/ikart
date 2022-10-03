import React from 'react'



const ProductCard = (prop) => {

  return (
    <div className='card'>
        <div className='productImage'>
            <img src={prop.image} alt="product"/>
        </div>
        <div className='property'>
            <div className='name'>{prop.name}</div>
            <div className='color'>{prop.color}</div>
            <div className='price'>{prop.price}</div>
            <div className='button'>
                <button className='like'>/</button>
                <button className='add'>+</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard