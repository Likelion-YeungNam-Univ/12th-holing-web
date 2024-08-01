import axios from 'axios';

// 증상테스트 문항 get
const getSurvey = async () => {
  const authToken = process.env.REACT_APP_API_AUTH_TOKEN;
  const serverUrl = process.env.REACT_APP_API_URL;
  const endpoint = '/survey/symptom-test';
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
};

export default getSurvey;