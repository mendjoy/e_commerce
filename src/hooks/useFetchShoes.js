import axios from 'axios';
import { useState, useEffect } from 'react';

export const useShoes =  () => {

  const apiUrl = 'https://dummyjson.com/products';

  const [shoesData, setShoesData] = useState([]);

  const getShoes = (url) => {

    axios.get(url)
      .then(response =>  setShoesData(response.data.products))
      .catch(error => console.log(error));
    };

    useEffect(() => {
        getShoes(`${apiUrl}/category/womens-shoes`);
    
},[])

return  { shoesData }
  
};


