import axios from 'axios';
import { load } from 'react-cookies';

const getReportSummary = async (user) => {
  const serverUrl = process.env.REACT_APP_API_URL;
  const endpoint = user==='my' ? ('/user/me/reports/summary') : ('/user/mate/reports/summary');
  const apiUrl = `${serverUrl}${endpoint}`;
  const jwtToken = load('jwtToken');
  
  try {
    const res = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log( 'Error details:', error.response ? error.response.data : error.message);
    throw error;
  }
}

export default getReportSummary;