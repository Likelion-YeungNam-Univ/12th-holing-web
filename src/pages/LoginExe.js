import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import ShareUrlPtn from 'components/login/ShareUrlPtn';
import UserInfo from './UserInfo';
import { load, save } from 'react-cookies'; // react-cookies에서 필요한 메서드만 가져오기
import Loading from 'pages/Loading.js';

const authToken = process.env.REACT_APP_API_AUTH_TOKEN;
// TODO: 헷갈리지 않게 파일명 바꾸기
const LoginExe = () => {
  const location = useLocation(); // 현재 위치 객체를 가져옴
  const [code, setCode] = useState(load('code')); // 쿠키에서 초기값 설정

  useEffect(() => {
    // URL에서 쿼리 파라미터를 추출
    const searchParams = new URLSearchParams(location.search);
    const codeFromUrl = searchParams.get('code');

    if (codeFromUrl) {
      // code가 URL에서 발견되면 쿠키와 상태를 업데이트
      save('code', codeFromUrl, { path: '/' }); // 주석 처리된 부분
      setCode(codeFromUrl);
      console.log('code: ', codeFromUrl);
    }
  }, [location.search]); // location.search가 변경될 때마다 useEffect가 실행됨

  useEffect(() => {
    if (code) {
      const apiUrl = process.env.REACT_APP_API_URL;
      const endPoint = '/auth/sign-in';
      const url = `${apiUrl}${endPoint}`;

      const requestBody = {
        gender: 'MALE',
        isPeriod: false,
      };

      axios
        .post(url, requestBody, {
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
          },
          params: { code: code }, // code를 객체 형태로 전달
        })
        .then((response) => {
          // console.log(response.headers);
          console.log('Data posted successfully:', response.data);

          if (response.data.accessToken) {
            // accessToken 값을 jwtToken으로 쿠키에 저장
            save('jwtToken', response.data.accessToken, { path: '/' });
          }
        })
        .catch((error) => {
          console.error(
            'Error posting data:',
            error.response ? error.response.data : error.message
          );
        });
    }
  }, [code]); // code가 변경될 때만 useEffect 실행

  if (!code) {
    return null; // code가 없으면 아무 것도 렌더링하지 않음
  }

  return (
    <div>
      <Loading /> {/* 로그인 관련 UI를 렌더링하는 컴포넌트 */}
    </div>
  );
};

export default LoginExe;
