import React from 'react';
import { Outlet } from 'react-router-dom';
import { FrameWrapper } from 'styles/ComonItem-styled';
import ReportTopBar from '../topBar/ReportTopBar';

// Test 화면 프레임
function ReportFrame() {
  return (
    <FrameWrapper>
      <ReportTopBar/> {/* 상단바 */}
      <Outlet /> {/* 중첩라우팅 */}
      {/* <TestMenuBar /> 하단메뉴바 */}
    </FrameWrapper>
  );
}

export default ReportFrame;
