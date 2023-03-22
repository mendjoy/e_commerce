import React from 'react'

//api 
import { useSunglasses } from '../hooks/useFetchSunglasses'
//componentes
import ProductsCard from '../components/ProductsCard';

const Sunglasses = () => {
 
  const { sunglassesData } = useSunglasses();

  return (
    <div className='product-container'>
        { sunglassesData.length === 0 && <p>Carregando...</p>}
        { sunglassesData.map((product) => <ProductsCard key={product.id} product={product}/>)}
    </div>
  )
}

export default Sunglasses