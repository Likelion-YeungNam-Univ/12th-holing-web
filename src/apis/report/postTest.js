import axios from 'axios';

// 증상테스트 결과 post
const postTest = async (selectedDetails, navigate) => {

  const authToken = process.env.REACT_APP_API_AUTH_TOKEN;
  const serverUrl = process.env.REACT_APP_API_URL;
  const endpoint = '/reports';
  const apiUrl = `${serverUrl}${endpoint}`;

  try {
    // questionScores 제외한 데이터 생성
    const filteredDetails = selectedDetails.map(detail => {
      const { questionScores, ...rest } = detail;
      return rest;
    });

    console.log('Sending data to server:', JSON.stringify(filteredDetails, null, 2)); // 전송 데이터 확인

    const res = await axios.post(apiUrl, filteredDetails, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    });

    console.log('filteredDetails=', filteredDetails);
    alert(res.data);
    navigate('/');
    // return res.data;
  } catch (error) {
    console.log('Error details:', error.response ? error.response.data : error.message);
    alert(error.response.data.cause);
    throw error;
  }
};

export default postTest;
