import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
const authToken = process.env.REACT_APP_API_AUTH_TOKEN;

const deleteSchedule = (scheduleId) => {
  const endPoint = `/calendar/schedules/${scheduleId}`;
  const url = `${apiUrl}${endPoint}`;

  return axios.delete(url, {
    headers: {
      Accept: '*/*',
      Authorization: authToken,
    },
  });
};

export { deleteSchedule };  
