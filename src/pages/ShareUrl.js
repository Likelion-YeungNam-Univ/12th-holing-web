import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ShareUrlPtn from 'components/login/ShareUrlPtn'; // 경로 확인 필요

const ShareUrl = () => {
  const location = useLocation(); // 현재 위치 객체를 가져옴
  const [code, setCode] = useState(sessionStorage.getItem('code')); // 로컬 스토리지에서 초기값 설정

  useEffect(() => {
    // URL에서 쿼리 파라미터를 추출
    const searchParams = new URLSearchParams(location.search);
    const codeFromUrl = searchParams.get('code');

    if (codeFromUrl) {
      // code가 URL에서 발견되면 로컬 스토리지와 상태를 업데이트
      sessionStorage.setItem('code', codeFromUrl);
      setCode(codeFromUrl);
      console.log('code: ', code);
    }
  }, [location.search]); // location.search가 변경될 때마다 useEffect가 실행됨

  useEffect(() => {
    if (code) {
      const apiUrl = 'http://43.201.5.161:8080';
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
          console.log('Data posted successfully:', response.data);
          if (response.data.accessToken) {
            sessionStorage.setItem('accessToken', response.data.accessToken);
          }
        })
        .catch((error) => {
          console.error(
            'Error posting data:',
            error.response ? error.response.data : error.message
          );
        });
    }
  }); // code가 변경될 때만 useEffect 실행

  if (!code) {
    return null; // code가 없으면 아무 것도 렌더링하지 않음
  }

  return (
    <div>
      <ShareUrlPtn /> {/* 로그인 관련 UI를 렌더링하는 컴포넌트 */}
    </div>
  );
};

export default ShareUrl;
