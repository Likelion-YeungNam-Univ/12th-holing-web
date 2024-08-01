import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // react-router-dom에서 useNavigate 훅 import
import {
  Wrapper,
  Header,
  Title,
  Num,
  Question,
  AnsContainer,
  Answer,
  NextBtn,
  Img,
} from 'styles/selfTest/selfTest-styled';

function FeSelfTest() {
  const [selectedAnswer, setSelectedAnswer] = useState(null); // 현재 선택된 답변을 저장하는 상태
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer); // 클릭된 답변을 상태로 설정
  };

  const isButtonActive = selectedAnswer !== null; // 버튼 활성화 상태

  const handleNextButtonClick = () => {
    if (isButtonActive) {
      navigate('/SelfTest2'); // 다음 페이지로 이동
    }
  };

  return (
    <Wrapper>
      <Header>
        <Title>갱년기 자가진단 테스트</Title>
        <Num>
          <span>01</span>/10
        </Num>
        <Question>
          최근 생리 주기가 불규칙해지거나, 생리량이 변하는 등의 변화가 있나요?
        </Question>
      </Header>
      {/* <Img src={test_1} alt="test1" /> */}
      {/* 이미지 넣어주시면 됩니다! */}
      <AnsContainer>
        <Answer
          onClick={() => handleAnswerClick('네, 규칙적으로 발생합니다.')}
          isSelected={selectedAnswer === '네, 규칙적으로 발생합니다.'}
        >
          네, 규칙적으로 발생합니다.
        </Answer>
        <Answer
          onClick={() => handleAnswerClick('아니요, 불규칙적입니다.')}
          isSelected={selectedAnswer === '아니요, 불규칙적입니다.'}
        >
          아니요, 불규칙적입니다.
        </Answer>
        <Answer
          onClick={() =>
            handleAnswerClick('아니요, 더 이상 발생하지 않습니다.')
          }
          isSelected={selectedAnswer === '아니요, 더 이상 발생하지 않습니다.'}
        >
          아니요, 더 이상 발생하지 않습니다.
        </Answer>
      </AnsContainer>
      <NextBtn
        disabled={!isButtonActive}
        style={{
          backgroundColor: isButtonActive ? '#9180FF' : '#DDDDDD',
          color: isButtonActive ? '#FFFFFF' : '#B3B3B3',
          cursor: isButtonActive ? 'pointer' : 'not-allowed',
        }}
        onClick={handleNextButtonClick} // 클릭 시 페이지 이동
      >
        다음
      </NextBtn>
    </Wrapper>
  );
}

export default FeSelfTest;
