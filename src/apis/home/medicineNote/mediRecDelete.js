import axios from 'axios';
import { load } from 'react-cookies';

const apiUrl = process.env.REACT_APP_API_URL;

const jwtToken = load('jwtToken');

const deleteMediRec = ({ id }) => {
  const endPoint = `/user/medicines/${id}/history`;
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

export { deleteMediRec }; //완료
