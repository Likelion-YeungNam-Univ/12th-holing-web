import React, { useEffect } from 'react';
import axios from 'axios';

const KakaoRedirectHandler = () => {
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');
    const grant_type = 'authorization_code';
    const client_id = process.env.REACT_APP_REST_API_KEY;
    const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}`,
        null, // POST 요청 본문이 필요 없으므로 null을 전달합니다.
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        }
      )
      .then((response) => {
        console.log(response.data); // 로그인 성공 시 받은 데이터를 처리합니다.
        // 예를 들어, 토큰을 저장하거나 다른 페이지로 리디렉션할 수 있습니다.
      })
      .catch((error) => {
        console.error(error); // 에러 발생 시 콘솔에 로그를 출력합니다.
      });
  }, []);

  return <div>로딩중...</div>;
};

export default KakaoRedirectHandler;
