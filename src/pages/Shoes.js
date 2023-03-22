import React from 'react'

//api 
import { useShoes } from '../hooks/useFetchShoes'
//components
import ProductsCard from '../components/ProductsCard'

const Shoes = () => {
    const { shoesData } = useShoes()

  return (
    <div className='product-container'>
        { shoesData.length === 0 && <p>Carregando...</p>}
        { shoesData.map((product) => <ProductsCard key={product.id} product={product}/>)}
    </div>
  )
}

export default Shoes