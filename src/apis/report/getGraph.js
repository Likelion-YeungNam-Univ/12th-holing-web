import axios from 'axios';

const getGraph = async(user) => {
  const authToken = process.env.REACT_APP_API_AUTH_TOKEN;
  const serverUrl = process.env.REACT_APP_API_URL;
  // 탭 위치에 따른 endpoint 변화
  const endpoint = user==='my' ? ('/user/me/reports/score') : ('/user/mate/reports/score');
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

export default getGraph;
