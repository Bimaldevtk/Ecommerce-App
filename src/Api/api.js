import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const getAllProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
};

export const getProductsById = async (id) => {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
};

// export const getProductsImage = async () => {
//     const response = await axios.get(`${BASE_URL}/products/image`);
//     return response.data;
// };
