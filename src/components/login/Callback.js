import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const client_id = process.env.REACT_APP_REST_API_KEY;
const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
// const server_url = process.env.REACT_APP_API_URL;

const Callback = () => {
  const location = useLocation(); // 현재 위치 객체를 가져옵니다.
  const [code, setCode] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const endPoint = '/auth/sign-in';
    const searchParams = new URLSearchParams(location.search);

    const requestBody = {
      gender: 'MALE',
      isPeriod: false,
    };

    const url = `${apiUrl}${endPoint}`;

    axios
      .post(url, requestBody, {
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
        params: {
          code: code,
        },
      })
      .then((response) => {
        console.log('Data posted successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
  }, []);

  // const fetchAccessToken = async (code) => {
  //   const tokenEndpoint = `${server_url}`;

  //   const params = new URLSearchParams();
  //   params.append('grant_type', 'authorization_code');
  //   params.append('code', code);
  //   params.append('redirect_uri', redirect_uri);
  //   params.append('client_id', client_id);

  //   try {
  //     const response = await axios.post(tokenEndpoint, params.toString(), {
  //       headers: {
  //         Accept: '*/*',
  //         'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  //       },
  //     });
  //     const data = response.data;
  //     if (data.accessToken) {
  //       localStorage.setItem('accessToken', data.accessToken);
  //       console.log('Access Token:', data.accessToken);
  //     } else {
  //       console.error('액세스 토큰 요청 오류', data);
  //     }
  //   } catch (error) {
  //     console.error('토큰 요청 중 오류 발생', error);
  //   }
  // };

  return <button onClick={() => code && fetchAccessToken(code)}>POST</button>;
};

export default Callback;
