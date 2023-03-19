import axios from 'axios';

const apiUrl = 'https://dummyjson.com/products';

export const getJewelery = async () => {
  try {
    const response = await axios.get(`${apiUrl}/category/womens-jewellery`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
