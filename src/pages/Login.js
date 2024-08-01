import React from 'react';
import LoginButton from 'components/login/LoginButton';
import ServiceDesc from 'components/login/ServiceDesc';
import { LoginDesc } from 'styles/login/ServiceDesc-styled';
const Login = () => {
  return (
    <>
      <ServiceDesc />
      <LoginButton />
      <LoginDesc>카카오로 연동하여 나의 짝꿍의 리포트도 연결해보아요</LoginDesc>
    </>
  );
};

export default Login;
