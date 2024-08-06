import React from 'react';
import { Outlet } from 'react-router-dom';
import { FrameWrapper } from 'styles/ComonItem-styled';

function IntroFrame() {
  return (
    <FrameWrapper>
      <Outlet /> {/* 중첩라우팅 */}
    </FrameWrapper>
  );
}

export default IntroFrame;
