import axios from 'axios';
import { useState, useEffect } from 'react';

export const useJewelery =  () => {

  const apiUrl = 'https://dummyjson.com/products';

  const [jeweleryData, setJeweleryData] = useState([]);

  const getJewelery = (url) => {
    
    axios.get(url)
      .then(response =>  setJeweleryData(response.data.products))
      .catch(error => console.log(error));
    };

    useEffect(() => {
        getJewelery(`${apiUrl}/category/womens-jewellery`);
    },[])

    return  { jeweleryData }
};



