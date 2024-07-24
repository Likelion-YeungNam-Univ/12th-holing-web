import React from 'react';
import {
  Wrapper,
  Gender,
  Header,
  Title,
  Desc,
  Img,
  ImgContainer,
  Female,
  Male,
  NextBtn,
} from 'styles/userInfo/UserInfo-styled';
import UserInfo_Fe1 from '../assets/images/UserInfo_Fe1.png';
import UserInfo_Ma1 from '../assets/images/UserInfo_Ma1.png';

function UserInfo() {
  return (
    <Wrapper>
      <Header>
        <Title>개인정보기입</Title>
        <Desc>
          자신의 <span>성별</span>을 체크해주세요
        </Desc>
      </Header>
      <Gender>
        <ImgContainer>
          <Img src={UserInfo_Fe1} alt="Female" />
          <Female>여성</Female>
        </ImgContainer>
        <ImgContainer>
          <Img src={UserInfo_Ma1} alt="Male" />
          <Male>남성</Male>
        </ImgContainer>
      </Gender>
      <NextBtn>다음</NextBtn>
    </Wrapper>
  );
}

export default UserInfo;
