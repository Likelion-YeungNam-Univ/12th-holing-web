import React from 'react';
import { Outlet } from 'react-router-dom';
import { FrameWrapper } from 'styles/ComonItem-styled';
import TestTopBar from 'components/comonents/topBar/TestTopBar';

// Test 화면 프레임
function ShareFrame() {
  return (
    <FrameWrapper>
      <TestTopBar /> {/* 상단바 */}
      <Outlet /> {/* 중첩라우팅 */}
      {/* <TestMenuBar /> 하단메뉴바 */}
    </FrameWrapper>
  );
}

export default ShareFrame;
