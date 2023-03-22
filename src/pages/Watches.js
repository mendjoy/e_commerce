import React from 'react'
//api
import { useWatches } from '../hooks/useFetchWatches'

//component
import ProductsCard from '../components/ProductsCard'
//css
import './Home.css'

const Watches = () => {

    const { watchesData } = useWatches();

  return (
    <div className='product-container'>
        { watchesData.length === 0 && <p>Carregando...</p>}
        { watchesData.map((product) => <ProductsCard key={product.id} product={product}/>)}
    </div>
  )
}

export default Watches