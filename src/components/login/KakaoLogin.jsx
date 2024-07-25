import { getToken } from 'apis/Login';
import React, { useEffect } from 'react';
import login_kakao from 'assets/images/login_kakao.png';
// const client_id = 'd6f6575143c8fbcb6742cad1756bc92f';
// const redirect_url = 'http://43.201.5.161:8080/auth/token';
// const response_type = 'code';
import { Btn } from 'styles/login/ServiceDesc-styled';

const KakaoLogin = () => {
  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const code = search.get('code');
    const accessToken = localStorage.getItem('access_token');

    if (code && (!accessToken || accessToken === 'undefined')) {
      handleGetToken();
    }
  }, []);
  const handleGetToken = async () => {
    const {
      token_type,
      access_token,
      id_token,
      expires_in,
      refresh_token,
      refresh_token_expires_in,
      scope,
    } = await getToken();

    localStorage.setItem('access_token', access_token);
  };
  const authParam = new URLSearchParams({
    client_id: 'd6f6575143c8fbcb6742cad1756bc92f',
    redirect_url: 'http://43.201.5.161:8080/auth/token',
    response_type: 'code',
  });
  return (
    <Btn>
      <a
        href={`https://kauth.kakao.com/oauth/authorize?${authParam.toString()}`}
      >
        <img
          src={login_kakao} // import한 이미지 사용
          alt="카카오 로그인"
          style={{ cursor: 'pointer' }}
        />
      </a>
    </Btn>
  );
};

export default KakaoLogin;
