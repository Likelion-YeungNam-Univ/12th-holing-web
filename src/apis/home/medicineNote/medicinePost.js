import axios from 'axios';
import { load } from 'react-cookies';

const apiUrl = process.env.REACT_APP_API_URL;

const jwtToken = load('jwtToken');

const postMedicines = (medicineData) => {
  const endPoint = '/user/medicines';
  const url = `${apiUrl}${endPoint}`;

  return axios.post(url, medicineData, {
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

export { postMedicines };
