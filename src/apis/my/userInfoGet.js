import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
const authToken = process.env.REACT_APP_API_AUTH_TOKEN;

const getUserInfo = () => {
  const endPoint = `/user/me`;
  const url = `${apiUrl}${endPoint}`;

  return axios.get(url, {
    headers: {
      Accept: '*/*',
      Authorization: authToken,
    },
  });
};

export { getUserInfo };
