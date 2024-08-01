import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
const authToken = process.env.REACT_APP_API_AUTH_TOKEN;

const fetchScheduleCounts = (date) => {
  const endPoint = '/calendar/schedules/month';
  const url = `${apiUrl}${endPoint}`;

  return axios.get(url, {
    params: { date },
    headers: {
      Accept: '*/*',
      Authorization: authToken,
    },
  });
};

export { fetchScheduleCounts };
