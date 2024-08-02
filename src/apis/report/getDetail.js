import axios from "axios";

const getDetail = async(reportId) => {
  const authToken = process.env.REACT_APP_API_AUTH_TOKEN;
  const serverUrl = process.env.REACT_APP_API_URL;
  const endpoint = `/reports/${reportId}`;
  const apiUrl = `${serverUrl}${endpoint}`;
    
  try{
    const res = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
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
