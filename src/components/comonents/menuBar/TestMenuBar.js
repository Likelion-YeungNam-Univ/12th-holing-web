import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MenuWrapper, PostTestBtn } from 'styles/ComonItem-styled';

function TestMenuBar() {
  const navigate = useNavigate();

  return (
    <MenuWrapper>
        {/* TODO: 제출 POST연결 예정 */}
      <PostTestBtn>테스트 제출하기</PostTestBtn>
    </MenuWrapper>
  )
}

export default TestMenuBar;
