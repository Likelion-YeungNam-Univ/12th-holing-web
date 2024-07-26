import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { TestTopBarContainer, TestTopBarWrapper, BackIconWrapper } from 'styles/ComonItem-styled';
import img_logo from 'assets/images/logo_holing.png'
import styled from 'styled-components';

function LogoCenterBar() {
  const navigate = useNavigate();

    // 뒤로가기 버튼
  const gotoBack = () =>{
      navigate(-1);
  }

  return (
    <>
      <TestTopBarContainer>
        <TestTopBarWrapper>

          <BackIconWrapper onClick={gotoBack}>
            <IoIosArrowBack style={{ color: '#5B5B5B', width: '28px', height: '28px', marginLeft:'32px' }} />
          </BackIconWrapper>

          <LogoImg src= {img_logo} alt="Logo"></LogoImg>
          
        </TestTopBarWrapper>
      </TestTopBarContainer>
    </>
  )
}

export default LogoCenterBar;


export const LogoImg = styled.img`
  width: 153px;
  height: 36px;
  margin-top: 8px;
`