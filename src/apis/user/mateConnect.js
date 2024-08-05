import axios from 'axios';
import { load } from 'react-cookies';

const apiUrl = process.env.REACT_APP_API_URL;

const jwtToken = load('jwtToken');

const connectMate = (socialId) => {
  const endPoint = `/user/connect/${socialId}`;
  const url = `${apiUrl}${endPoint}`;

  return axios.patch(url, socialId, {
    params: { socialId },
    headers: {
      Accept: '*/*',
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

export { connectMate };
