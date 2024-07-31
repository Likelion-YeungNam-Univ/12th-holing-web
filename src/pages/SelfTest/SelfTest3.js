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
import test_4 from 'assets/images/test_4.svg';

function SelfTest() {
  const [selectedAnswer, setSelectedAnswer] = useState(null); // 현재 선택된 답변을 저장하는 상태
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer); // 클릭된 답변을 상태로 설정
  };

  const isButtonActive = selectedAnswer !== null; // 버튼 활성화 상태

  const handleNextButtonClick = () => {
    if (isButtonActive) {
      navigate('/SelfTest4'); // 다음 페이지로 이동
    }
  };

  return (
    <Wrapper>
      <Header>
        <Title>갱년기 자가진단 테스트</Title>
        <Num>
          <span>03</span>/10
        </Num>
        <Question>
          갑자기 얼굴이나 몸이 뜨거워지거나, 땀이 많이 나는 경우가 자주 있나요?
        </Question>
      </Header>
      <Img src={test_4} alt="test4" />
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
