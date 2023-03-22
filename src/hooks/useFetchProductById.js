import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchProductById =  () => {

    const apiUrl = 'https://dummyjson.com/products';

    const [ productInfo, setProductInfo] = useState()
    const { id } = useParams()

    const getInfo = (url) => {
      axios.get(url)
        .then(response =>  setProductInfo(response.data))
        .catch(error => console.log(error));
      };

    useEffect(() => {
        getInfo(`${apiUrl}/${id}`)
    
    },[id])

    return  { productInfo }
  
};



