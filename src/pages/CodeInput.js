import React from 'react';
import { useState } from 'react';
import {
  CodeTitle,
  CodeDesc,
  CodeInputBox,
  Wrapper,
  NextBtn,
} from 'styles/login/SharePtn-styled';
import { connectMate } from 'apis/user/mateConnect';
import { useNavigate } from 'react-router-dom';
import LogoCenterBar from 'components/comonents/topBar/LogoCenterTopBar';

function CodeInput() {
  const navigate = useNavigate();
  const [socialId, setSocialId] = useState('');

  const handleNext = async (socialId) => {
    try {
      const response = await connectMate(socialId);
      navigate('/');
    } catch (error) {
      //console.error('연동 실패', error);
      alert('연동이 실패했습니다. 인증코드를 확인해주세요.');
    }
  };

  const handleChange = (e) => {
    setSocialId(e.target.value);
  };

  return (
    <>
      <LogoCenterBar></LogoCenterBar>
      <Wrapper>
        <CodeTitle>인증 코드 입력</CodeTitle>
        <CodeDesc>짝꿍에게 받은 10자리 코드를 입력하세요</CodeDesc>
        <CodeInputBox
          placeholder="인증 코드를 입력해주세요"
          value={socialId}
          onChange={handleChange}
        ></CodeInputBox>
        <NextBtn onClick={() => handleNext(socialId)}>다음</NextBtn>
      </Wrapper>
    </>
  );
}

export default CodeInput;
