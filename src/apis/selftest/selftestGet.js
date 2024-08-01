import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
//const authToken = process.env.REACT_APP_API_AUTH_TOKEN;

const getSelftest = (gender, page) => {
  const endPoint = `/survey/self-test`;
  const url = `${apiUrl}${endPoint}`;

  return axios.get(url, {
    params: { gender, page },
    headers: {
      Accept: '*/*',
      //Authorization: authToken,
    },
  });
};

export { getSelftest };
