import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
const authToken = process.env.REACT_APP_API_AUTH_TOKEN;

const postMedicine = (medicines) => {
  const endPoint = '/user/medicines';
  const url = `${apiUrl}${endPoint}`;

  return axios.post(url, scheduleData, {
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: authToken,
    },
  });
};

export { postMedicine };
