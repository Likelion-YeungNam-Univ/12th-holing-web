import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
const authToken = process.env.REACT_APP_API_AUTH_TOKEN;

const countMissions = (date) => {
  const endPoint = `/missions/month`;
  const url = `${apiUrl}${endPoint}`;

  return axios.get(url, {
    params: { date },
    headers: {
      Accept: '*/*',
      Authorization: authToken,
    },
  });
};

export { countMissions };
