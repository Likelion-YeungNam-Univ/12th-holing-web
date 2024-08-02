import axios from 'axios';
import { load } from 'react-cookies';

const apiUrl = process.env.REACT_APP_API_URL;

const jwtToken = load('jwtToken');

const countMissions = (date) => {
  const endPoint = `/missions/month`;
  const url = `${apiUrl}${endPoint}`;

  return axios.get(url, {
    params: { date },
    headers: {
      Accept: '*/*',
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

export { countMissions };
