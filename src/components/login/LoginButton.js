import React from 'react';
import login_kakao from 'assets/images/login_kakao.png';

// 클라이언트 ID, 리다이렉트 URI, 인가 엔드포인트 설정
const REST_API_KEY = 'd6f6575143c8fbcb6742cad1756bc92f';
const REDIRECT_URI = 'http://43.201.5.161:8080/auth/token'; // 리다이렉트 URI
// const authorizationEndpoint = 'https://authorization-server.com/auth/authorize';

const LoginButton = () => {
  const handleLogin = () => {
    // CSRF 방지를 위한 임의의 상태 값 생성 및 저장
    const state = Math.random().toString(36).substring(2);
    localStorage.setItem('oauth_state', state);

    // 인가 요청 URL 생성
    const authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    // 인가 URL로 리다이렉트
    window.location.href = authUrl;
  };

  return (
    <button
      onClick={handleLogin}
      style={{
        display: 'flex', // 버튼 내부 요소를 플렉스 박스로 설정
        justifyContent: 'center',
        margin: 'auto',
        marginBottom: '25px',
        border: 'none',
        borderRadius: '13px',
      }}
    >
      <img
        src={login_kakao} // 이미지 URL을 입력하세요
        alt="카카오 로그인"
        style={{
          width: 'auto', // 이미지 너비 설정
          height: 'auto',
        }}
      />
    </button>
  );
};

export default LoginButton;
