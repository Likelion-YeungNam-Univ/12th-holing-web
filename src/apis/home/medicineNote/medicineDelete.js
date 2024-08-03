import axios from 'axios';
import { load } from 'react-cookies';

const apiUrl = process.env.REACT_APP_API_URL;

const jwtToken = load('jwtToken');

const deleteMedicine = ({ id }) => {
  const endPoint = `/user/medicines/${id}`;
  const url = `${apiUrl}${endPoint}`;

  return axios.delete(
    url,

    {
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
  );
};

export { deleteMedicine }; //완료
