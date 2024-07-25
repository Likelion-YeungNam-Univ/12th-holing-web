import React from 'react'
import { Outlet } from 'react-router-dom';
import { FrameWrapper } from 'styles/ComonItem-styled';
import MenuBar from '../comonents/MenuBar';
import TestTopBar from 'components/comonents/TestTopBar';

// Test 화면 프레임
function TestFrame() {
  return (
    <FrameWrapper>
      <TestTopBar /> {/* 상단바 */}
      < Outlet />  {/* 중첩라우팅 */}
      <MenuBar />  {/* 하단메뉴바 */}
  </FrameWrapper>
  )
}

export default TestFrame;
