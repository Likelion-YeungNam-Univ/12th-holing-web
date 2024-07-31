import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MenuWrapper, PostTestBtn } from 'styles/ComonItem-styled';
import postTest from 'apis/report/postTest';


function TestMenuBar() {
  const navigate = useNavigate();

  return (
    <MenuWrapper onClick={postTest}>
        {/* TODO: 제출 POST연결 예정 */}
      <PostTestBtn>테스트 제출하기</PostTestBtn>
    </MenuWrapper>
  )
}

export default TestMenuBar;
