import axios from 'axios';
import { load } from 'react-cookies';

const apiUrl = process.env.REACT_APP_API_URL;

const jwtToken = load('jwtToken');

const completeMissions = (missionResultId) => {
  const endPoint = `/missions/${missionResultId}/complete`;
  const url = `${apiUrl}${endPoint}`;

  return axios.patch(url, missionResultId, {
    params: { missionResultId },
    headers: {
      Accept: '*/*',
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

export { completeMissions };
