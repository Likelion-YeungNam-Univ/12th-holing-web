import axios from "axios";
import { load } from 'react-cookies';

const getDetail = async(reportId) => {
  const serverUrl = process.env.REACT_APP_API_URL;
  const endpoint = `/reports/${reportId}`;
  const apiUrl = `${serverUrl}${endpoint}`;
  const jwtToken = load('jwtToken');

  try{
    const res = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    console.log("res.data = ", res.data)
    return res.data;
  }catch(error){
    console.log('Error details:', error.response ? error.response.data : error.message);
    throw error;
  }
}

export default getDetail;
