import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { TestTopBarContainer, TestTopBarWrapper, BackIconWrapper, TestTopBarText } from 'styles/ComonItem-styled';

function TestTopBar() {
  return (
    <>
      <TestTopBarContainer>
        <TestTopBarWrapper>

          <BackIconWrapper>
            <IoIosArrowBack style={{ color: '#5B5B5B', width: '24px', height: '24px' }} />
          </BackIconWrapper>

          <TestTopBarText>갱년기 진단 테스트</TestTopBarText>
          
        </TestTopBarWrapper>
      </TestTopBarContainer>
    </>
  );
}

export default TestTopBar;
