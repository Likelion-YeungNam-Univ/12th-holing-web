import axios from 'axios';
import { load } from 'react-cookies';

const apiUrl = process.env.REACT_APP_API_URL;

const jwtToken = load('jwtToken');

const postSchedule = (scheduleData) => {
  const endPoint = '/calendar/schedules';
  const url = `${apiUrl}${endPoint}`;

  return axios.post(url, scheduleData, {
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

export { postSchedule };
