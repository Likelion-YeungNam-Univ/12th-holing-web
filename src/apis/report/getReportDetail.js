import axios from 'axios';

const getReportDetail = async () => {
  const authToken = process.env.REACT_APP_API_AUTH_TOKEN;
  const serverUrl = process.env.REACT_APP_API_URL;
  const endpoint = '/user/me/reports/summary';
  const apiUrl = `${serverUrl}${endpoint}`;
  
  try {
    const res = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log( 'Error details:', error.response ? error.response.data : error.message);
    throw error;
  }
}

export default getReportDetail;