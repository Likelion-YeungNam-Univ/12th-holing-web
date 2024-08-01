import axios from 'axios';
import { load } from 'react-cookies';

const apiUrl = process.env.REACT_APP_API_URL;

const jwtToken = load('jwtToken');

const getMedicines = () => {
  const endPoint = '/user/medicines';
  const url = `${apiUrl}${endPoint}`;

  return axios.get(url, {
    headers: {
      Accept: '*/*',
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

export { getMedicines };
