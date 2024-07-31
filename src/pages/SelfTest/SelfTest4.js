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
import test_5 from 'assets/images/test_5.svg';

function SelfTest() {
  const [selectedAnswer, setSelectedAnswer] = useState(null); // 현재 선택된 답변을 저장하는 상태
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer); // 클릭된 답변을 상태로 설정
  };

  const isButtonActive = selectedAnswer !== null; // 버튼 활성화 상태

  const handleNextButtonClick = () => {
    if (isButtonActive) {
      navigate('/SelfTest5'); // 다음 페이지로 이동
    }
  };

  return (
    <Wrapper>
      <Header>
        <Title>갱년기 자가진단 테스트</Title>
        <Num>
          <span>04</span>/10
        </Num>
        <Question>
          요즘 들어 기분이 쉽게 변하거나, 사소한 일에 짜증이 나거나 우울한
          느낌이 드시나요?
        </Question>
      </Header>
      <Img src={test_5} alt="test5" />
      <AnsContainer>
        <Answer
          onClick={() => handleAnswerClick('네')}
          isSelected={selectedAnswer === '네'}
        >
          네
        </Answer>
        <Answer
          onClick={() => handleAnswerClick('아니요')}
          isSelected={selectedAnswer === '아니요'}
        >
          아니요
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

export default SelfTest;
