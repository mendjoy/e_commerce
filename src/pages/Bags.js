import React from 'react'
//api
import { useBags } from '../hooks/useFetchBags'
//componentes
import ProductsCard from '../components/ProductsCard'

const Bags = () => {
    const { bagsData } = useBags()

  return (
    <div className='product-container'>
        { bagsData.length === 0 && <p>Carregando...</p>}
        { bagsData.map((product) => <ProductsCard key={product.id} product={product}/>)}
    </div>
  )
}

export default Bags