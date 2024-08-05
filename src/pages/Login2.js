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
} from 'styles/login/SharePtn-styled';
import ShareLink from 'hooks/login/ShareLink';

// <연동 받는사람>

const Login = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const copyUrlToClipboard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setModalIsOpen(true);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <ServiceDesc />
      {/* <LoginButton /> */}

      <ShareBtn onClick={copyUrlToClipboard}>짝꿍과 연동하기</ShareBtn>
      <Link to="/">
        <CloseBtn>닫고 홈화면으로 돌아가기</CloseBtn>
      </Link>
      <ShareLink
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="카카오톡에서 붙여넣기하여 짝꿍과 함께하세요!"
      />
      <LoginDesc>카카오로 연동하여 나의 짝꿍의 리포트도 연결해보아요</LoginDesc>
    </>
  );
};

export default Login;
