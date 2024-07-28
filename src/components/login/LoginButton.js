import React from 'react';
import login_kakao from 'assets/images/login_kakao.png';

const client_id = process.env.REACT_APP_REST_API_KEY;
const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

const LoginButton = () => {
  const handleLogin = () => {
    // CSRF 방지를 위한 임의의 상태 값 생성 및 저장
    const state = Math.random().toString(36).substring(2);
    localStorage.setItem('oauth_state', state);

    // 인가 요청 URL 생성
    const authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;
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
