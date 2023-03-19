import React from 'react'
import { useState, useEffect } from 'react'

//api
import { getJewelery } from '../services/jeweleryService'

const Home = () => {

    const [jeweleryData, setJeweleryData] = useState([]);
    console.log(jeweleryData)

    useEffect(() => {
        const fetchJewelery = async () => {
          const data = await getJewelery();
          setJeweleryData(data);
        };
        fetchJewelery();
      }, []);

  return (
    <div>
      

    </div>
  )
}

export default Home;