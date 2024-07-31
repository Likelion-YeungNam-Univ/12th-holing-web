import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
const authToken = process.env.REACT_APP_API_AUTH_TOKEN;

const patchMissions = (missionResultId) => {
  const endPoint = `/missions/${missionResultId}`;
  const url = `${apiUrl}${endPoint}`;

  return axios.patch(url, missionResultId, {
    params: { missionResultId },
    headers: {
      Accept: '*/*',
      Authorization: authToken,
    },
  });
};

export { patchMissions };
