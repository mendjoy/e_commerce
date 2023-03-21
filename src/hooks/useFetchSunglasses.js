import axios from 'axios';
import { useState, useEffect } from 'react';

export const useSunglasses =  () => {

  const apiUrl = 'https://dummyjson.com/products';

  const [sunglassesData, setSunglassesData] = useState([]);

  const getSunglasses = (url) => {

    axios.get(url)
      .then(response =>  setSunglassesData(response.data.products))
      .catch(error => console.log(error));
    };

    useEffect(() => {
        getSunglasses(`${apiUrl}/category/sunglasses`);
    
},[])

return  { sunglassesData }
  
};

