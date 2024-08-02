import axios from 'axios';
import { load } from 'react-cookies';

const apiUrl = process.env.REACT_APP_API_URL;

const jwtToken = load('jwtToken');

const getMissions = (date) => {
  const endPoint = `/missions/history`;
  const url = `${apiUrl}${endPoint}`;

  return axios.get(url, {
    params: { date },
    headers: {
      Accept: '*/*',
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

export { getMissions };
