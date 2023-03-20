import React from 'react'
import { useState, useEffect } from 'react'

//api
import { getJewelery } from '../services/jeweleryService'

//css
import './Home.css'

const Home = () => {

  const [jeweleryData, setJeweleryData] = useState([]);
  console.log(jeweleryData)
  
  useEffect(() => {
      const fetchJewelery = async () => {
        const data = await getJewelery();
        setJeweleryData(data.products);
      };
      fetchJewelery();
    }, []);

  return (
    <div className='product-container'>

     <div className='banner'></div>

      { jeweleryData.length === 0 && <p>Carregando...</p>}
      { jeweleryData.map((product) => 
      <div key={product.id} className='product-info'>
        <img src={product.thumbnail} alt={product.title}/>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>)}
      
      

    </div>
  )
}

export default Home;