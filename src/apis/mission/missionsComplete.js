import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
const authToken = process.env.REACT_APP_API_AUTH_TOKEN;

const completeMissions = (missionResultId) => {
  const endPoint = `/missions/${missionResultId}/complete`;
  const url = `${apiUrl}${endPoint}`;

  return axios.patch(url, missionResultId, {
    params: { missionResultId },
    headers: {
      Accept: '*/*',
      Authorization: authToken,
    },
  });
};

export { completeMissions };
