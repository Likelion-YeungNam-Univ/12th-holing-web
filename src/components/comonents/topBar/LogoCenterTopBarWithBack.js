import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { TestTopBarContainer, TestTopBarWrapper, BackIconWrapper, CenterLogoImg } from 'styles/ComonItem-styled';
import img_logo from 'assets/images/logo_holing.png'

function LogoCenterBarWithBack() {
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

          <CenterLogoImg onClick={()=>navigate('/')} src= {img_logo} alt="Logo"></CenterLogoImg>
          
        </TestTopBarWrapper>
      </TestTopBarContainer>
    </>
  )
}

export default LogoCenterBarWithBack;