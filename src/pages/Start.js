import React from 'react';
import logo from 'assets/images/logo.gif';
import { Wrapper, Title, Desc, Logo, Bottom, Btn } from 'styles/Start-styled';
// import { Wrapper } from 'styles/home/MedicineNote-styled';

function Start() {
  return (
    <Wrapper>
      <Title>환영합니다!</Title>
      <Desc>
        지금부터 갱년기 호르몬
        <br />
        힐링을 시작해볼까요?
      </Desc>
      <Logo src={logo} alt="Logo"></Logo>
      <Bottom>홀링과 함께 갱년기 증상을 케어해보아요</Bottom>
      <Btn>시작하기</Btn>
      {/* TODO: 개인정보 페이지 이동 */}
    </Wrapper>
  );
}

export default Start;
