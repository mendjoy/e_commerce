import axios from 'axios';
import { useState, useEffect } from 'react';

export const useWatches =  () => {

  const apiUrl = 'https://dummyjson.com/products';

  const [watchesData, setWatchesData] = useState([]);

  const getWatches = (url) => {

    axios.get(url)
      .then(response =>  setWatchesData(response.data.products))
      .catch(error => console.log(error));
    };

    useEffect(() => {
        getWatches(`${apiUrl}/category/womens-watches`);
    
},[])

return  { watchesData }
  
};
