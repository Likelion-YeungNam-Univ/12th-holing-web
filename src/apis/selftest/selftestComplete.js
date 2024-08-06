import axios from 'axios';
import { load } from 'react-cookies';

const apiUrl = process.env.REACT_APP_API_URL;

const jwtToken = load('jwtToken');

const completeSelftest = () => {
  const endPoint = `/user/self-test`;
  const url = `${apiUrl}${endPoint}`;

  return axios.patch(url, {},{
    headers: {
      Accept: '*/*',
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

export { completeSelftest };
