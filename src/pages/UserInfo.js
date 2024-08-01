import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // react-router-dom에서 useNavigate 훅 import
import {
  Wrapper,
  Gender,
  Header,
  Title,
  Desc,
  Img,
  ImgContainer,
  Text as TextStyled,
  NextBtn,
} from 'styles/userInfo/UserInfo-styled';
import UserInfo_Fe1 from 'assets/images/UserInfo_Fe1.png';
import UserInfo_Fe2 from 'assets/images/UserInfo_Fe2.png';
import UserInfo_Ma1 from 'assets/images/UserInfo_Ma1.png';
import UserInfo_Ma2 from 'assets/images/UserInfo_Ma2.png';
import useImageToggle from 'hooks/userInfo/useImgToggle';
function UserInfo() {
  const [selectedGender, setSelectedGender] = useState(null);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const [
    femaleImage,
    femaleColor,
    toggleFemaleImageAndColor,
    resetFemaleImageAndColor,
  ] = useImageToggle(UserInfo_Fe1, UserInfo_Fe2, '#b3b3b3', '#5643D1');

  const [
    maleImage,
    maleColor,
    toggleMaleImageAndColor,
    resetMaleImageAndColor,
  ] = useImageToggle(UserInfo_Ma1, UserInfo_Ma2, '#b3b3b3', '#5643D1');

  const handleFemaleClick = () => {
    if (selectedGender !== 'female') {
      setSelectedGender('female');
      toggleFemaleImageAndColor();
      if (selectedGender === 'male') {
        resetMaleImageAndColor();
      }
    }
  };

  const handleMaleClick = () => {
    if (selectedGender !== 'male') {
      setSelectedGender('male');
      toggleMaleImageAndColor();
      if (selectedGender === 'female') {
        resetFemaleImageAndColor();
      }
    }
  };

  const isNextBtnEnabled = selectedGender !== null;

  const handleNextButtonClick = () => {
    if (isNextBtnEnabled) {
      if (selectedGender === 'female') {
        navigate('/feselftest'); // 여성 선택 시 FeSelfTest 페이지로 전환
      } else if (selectedGender === 'male') {
        navigate('/selftest'); // 남성 선택 시 MaSelfTest 페이지로 전환
      }
    }
  };

  return (
    <Wrapper>
      <Header>
        <Title>개인정보기입</Title>
        <Desc>
          자신의 <span>성별</span>을 체크해주세요
        </Desc>
      </Header>
      <Gender>
        <ImgContainer onClick={handleFemaleClick}>
          <Img
            src={selectedGender === 'female' ? UserInfo_Fe2 : UserInfo_Fe1}
            alt="Female"
          />
          <TextStyled align="right" active={selectedGender === 'female'}>
            여성
          </TextStyled>
        </ImgContainer>
        <ImgContainer onClick={handleMaleClick}>
          <Img
            src={selectedGender === 'male' ? UserInfo_Ma2 : UserInfo_Ma1}
            alt="Male"
          />
          <TextStyled align="left" active={selectedGender === 'male'}>
            남성
          </TextStyled>
        </ImgContainer>
      </Gender>
      <NextBtn enabled={isNextBtnEnabled} onClick={handleNextButtonClick}>
        다음
      </NextBtn>
    </Wrapper>
  );
}

export default UserInfo;
