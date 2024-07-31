import React from 'react'
import { MenuWrapper, PostTestBtn } from 'styles/ComonItem-styled';

function TestMenuBar({ onClick }) {
  return (
    <MenuWrapper onClick={onClick}>
      <PostTestBtn>테스트 제출하기</PostTestBtn>
    </MenuWrapper>
  )
}

export default TestMenuBar;
