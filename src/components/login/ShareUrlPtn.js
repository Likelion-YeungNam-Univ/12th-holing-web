import React from 'react';
import level4_1 from 'assets/images/level4_1.png';
import {
  Header,
  Title,
  Result,
  ShareBtn,
  CloseBtn,
} from 'styles/home/SharePtn-styled';

function ShareUrlPtn() {
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
      <ShareBtn>URL 복사하여 짝꿍과 연동하기</ShareBtn>
      <CloseBtn>닫고 홈화면으로 돌아가기</CloseBtn>
    </>
  );
}

export default ShareUrlPtn;
