import React from 'react'

//api
import { useJewelery } from '../hooks/useFetchJewelery'

//css
import './Home.css'

//components
import ProductsCard from '../components/ProductsCard'

const Home = () => {

    const { jeweleryData } = useJewelery();
    
  return (
    <div className='product-container'>
        <div className='banner'>
            <h3>Divine Sparkle</h3>
        </div>

      { jeweleryData.length === 0 && <p className='loading'>Loading...</p>}
      { jeweleryData.map((product) => <ProductsCard key={product.id} product={product}/>)}
      
    </div>
  )
}

export default Home;