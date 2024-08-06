import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { TestTopBarContainer, TestTopBarWrapper, BackIconWrapper, TestTopBarText } from 'styles/ComonItem-styled';

function ReportTopBar() {
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
            <IoIosArrowBack style={{ color: '#5B5B5B', width: '24px', height: '24px' }} />
          </BackIconWrapper>

          {/* TODO : 페이지에 따라 상단 TEXT 넘겨주기 */}
          <TestTopBarText>세부 리포트</TestTopBarText>
          
        </TestTopBarWrapper>
      </TestTopBarContainer>
    </>
  );
}

export default ReportTopBar;
