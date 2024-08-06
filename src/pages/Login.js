// import React from 'react';
// import LoginButton from 'components/login/LoginButton';
import ServiceDesc from 'components/login/ServiceDesc';
import { LoginDesc } from 'styles/login/ServiceDesc-styled';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import level4_1 from 'assets/images/level4_1.png';
import {
  Header,
  Title,
  Result,
  ShareBtn,
  CloseBtn,
  ConnectBtn,
} from 'styles/login/SharePtn-styled';
import ShareLink from 'hooks/login/ShareLink';

const Login = () => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <ServiceDesc />
      <ConnectBtn>짝꿍과 연동하기</ConnectBtn>
      <Link to="/">
        <CloseBtn>닫고 홈화면으로 돌아가기</CloseBtn>
      </Link>

      <LoginDesc>카카오로 연동하여 나의 짝꿍의 리포트도 연결해보아요</LoginDesc>
    </>
  );
};

export default Login;
