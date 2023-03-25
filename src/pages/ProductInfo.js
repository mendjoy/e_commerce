import React from 'react'

//api 
import { useFetchProductById } from '../hooks/useFetchProductById'

const ProductInfo = () => {
    const { productInfo } = useFetchProductById()
    console.log(productInfo)
   
  return (
    <div>
        {productInfo === null && <div></div>}
        {productInfo != null && 
        <div>
            <h3>{productInfo.title}</h3>
            <img src={productInfo.thumbnail} alt={productInfo.title} />
            <p>Brand: {productInfo.brand}</p>
            <p>{productInfo.description}</p>
            <p>price:{productInfo.price}</p>
            <p>{productInfo.discountPercentage}</p>
            <p>stock: {productInfo.stock}</p>
        </div>}
     
    </div>
  )
}

export default ProductInfo