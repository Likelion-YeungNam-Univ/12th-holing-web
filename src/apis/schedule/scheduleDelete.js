import axios from 'axios';
import { load } from 'react-cookies';

const apiUrl = process.env.REACT_APP_API_URL;

const jwtToken = load('jwtToken');

const deleteSchedule = (scheduleId) => {
  const endPoint = `/calendar/schedules/${scheduleId}`;
  const url = `${apiUrl}${endPoint}`;

  return axios.delete(url, {
    headers: {
      Accept: '*/*',
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

export { deleteSchedule };  
