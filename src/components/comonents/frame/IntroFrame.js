import React from 'react';
import { Outlet } from 'react-router-dom';
import { FrameWrapper } from 'styles/ComonItem-styled';
import LogoCenterBar from '../topBar/LogoCenterTopBar';
import IntroMenuBar from '../menuBar/IntroMenuBar';

function IntrFrame() {
  return (
    <FrameWrapper>
      <LogoCenterBar /> {/* 상단바 */}
      <Outlet /> {/* 중첩라우팅 */}
      <IntroMenuBar /> {/* 하단메뉴바 */}
    </FrameWrapper>
  );
}

export default IntrFrame;
