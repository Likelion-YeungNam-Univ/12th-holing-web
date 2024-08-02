import axios from 'axios';
import { load } from 'react-cookies';

const apiUrl = process.env.REACT_APP_API_URL;

const jwtToken = load('jwtToken');

const postProduct = (productPrice) => {
  const endPoint = '/user/product/exchanges';
  const url = `${apiUrl}${endPoint}`;

  return axios.post(url, productPrice, {
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

export { postProduct };
