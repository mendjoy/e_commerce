import axios from 'axios';
import { useState, useEffect } from 'react';

export const useBags =  () => {

  const apiUrl = 'https://dummyjson.com/products';

  const [bagsData, setBagsData] = useState([]);

  const getBags = (url) => {

    axios.get(url)
      .then(response =>  setBagsData(response.data.products))
      .catch(error => console.log(error));
    };

    useEffect(() => {
        getBags(`${apiUrl}/category/womens-bags`);
    
},[])

return  { bagsData }
  
};

