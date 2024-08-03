import axios from 'axios';
import { load } from 'react-cookies';

const apiUrl = process.env.REACT_APP_API_URL;

const jwtToken = load('jwtToken');

const takenMedicine = ({ medicineId, isTaken }) => {
  const endPoint = `/user/medicines/${medicineId}/history`;
  const url = `${apiUrl}${endPoint}`;

  return axios.post(
    url,

    { medicineId, isTaken },
    {
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
  );
};

export { takenMedicine }; //완료
