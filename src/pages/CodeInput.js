import React from 'react';
import { useState } from 'react';
import {
  CodeTitle,
  CodeDesc,
  CodeInputBox,
} from 'styles/login/SharePtn-styled';
import { connectMate } from 'apis/user/mateConnect';
import { useNavigate } from 'react-router-dom';

function CodeInput() {
  const navigate = useNavigate();
  const [socialId, setSocialId] = useState('');

  const handleNext = async (socialId) => {
    try {
      const response = await connectMate(socialId);
      console.log('연동 성공', response);
      navigate('/');
    } catch (error) {
      console.error('연동 실패', error);
    }
  };

  const handleChange = (e) => {
    setSocialId(e.target.value);
  };

  return (
    <>
      <CodeTitle>인증 코드 입력</CodeTitle>
      <CodeDesc>짝꿍에게 받은 10자리 코드를 입력하세요</CodeDesc>
      <CodeInputBox
        placeholder="인증 코드를 입력해주세요"
        value={socialId}
        onChange={handleChange}
      ></CodeInputBox>
      <button onClick={() => handleNext(socialId)}>다음</button>
    </>
  );
}

export default CodeInput;
