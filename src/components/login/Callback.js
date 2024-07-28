import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const client_id = process.env.REACT_APP_REST_API_KEY;
const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
const Callback = () => {
  const location = useLocation(); // 현재 위치 객체를 가져옵니다.

  useEffect(() => {
    // URL에서 쿼리 파라미터를 추출합니다.
    const searchParams = new URLSearchParams(location.search);
    console.log(searchParams);
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const savedState = localStorage.getItem('auth_state');

    // 상태 값을 검증합니다.
    if (code && state === savedState) {
      // 로컬 스토리지에서 상태 값을 제거합니다.
      localStorage.removeItem('oauth_state');

      // 인가 코드를 사용해 액세스 토큰을 요청합니다.
      fetchAccessToken(code);
    } else {
      // 오류 처리 (잘못된 상태 또는 코드 누락)
      console.error('잘못된 상태 또는 코드 누락');
    }
  }, [location]);

  const fetchAccessToken = async (code) => {
    const tokenEndpoint = 'https://kauth.kakao.com/oauth/authorization'; // 카카오의 토큰 엔드포인트 URL입니다.

    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', redirect_uri);
    params.append('client_id', client_id);

    try {
      const response = await axios.get(tokenEndpoint, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      });

      const data = response.data;
      if (data.access_token) {
        localStorage.setItem('access_token', data.access_token);
        console.log('Access Token:', data.access_token);
      } else {
        console.error('액세스 토큰 요청 오류', data);
      }
    } catch (error) {
      console.error('토큰 요청 중 오류 발생', error);
    }
  };

  return <div>로딩 중...</div>;
};

export default Callback;
