import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import level4_1 from 'assets/images/level4_1.png';
import {
  Header,
  Title,
  Result,
  ShareBtn,
  CloseBtn,
} from 'styles/home/SharePtn-styled';
import ShareLink from 'hooks/login/ShareLink';

function ShareUrlPtn() {
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
      <Header>카톡으로 전송하여</Header>
      <Title>
        나의 증상을
        <br />
        <span>짝꿍에게 공유</span>해보아요
      </Title>
      <Result>
        <img src={level4_1} alt="result4_1" />
        {/* {TODO:api} */}
      </Result>
      <ShareBtn onClick={copyUrlToClipboard}>
        URL 복사하여 짝꿍과 연동하기
      </ShareBtn>
      <Link to="/">
        <CloseBtn>닫고 홈화면으로 돌아가기</CloseBtn>
      </Link>
      <ShareLink
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="카카오톡에서 붙여넣기하여 짝꿍과 함께하세요!"
      />
    </>
  );
}

export default ShareUrlPtn;
