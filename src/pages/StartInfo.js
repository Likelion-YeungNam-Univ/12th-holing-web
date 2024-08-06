// import React from 'react';
// import LoginButton from 'components/login/LoginButton';
import ServiceDesc from 'components/login/ServiceDesc';
import { LoginDesc } from 'styles/login/ServiceDesc-styled';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  CloseBtn,
  ConnectBtn,
} from 'styles/login/SharePtn-styled';

const StartInfo = () => {
  return (
    <>
      <ServiceDesc />
      <ConnectBtn>짝꿍과 연동하기</ConnectBtn>
      <Link to="/home">
        <CloseBtn>닫고 홈화면으로 돌아가기</CloseBtn>
      </Link>

      <LoginDesc>카카오로 연동하여 나의 짝꿍의 리포트도 연결해보아요</LoginDesc>
    </>
  );
};

export default StartInfo;
