import React from 'react';
import {
  Wrapper,
  Header,
  Title,
  Num,
  Question,
  AnsContainer,
  Answer,
  NextBtn,
  // Img,
} from 'styles/selfTest/selfTest-styled';
import { useSelfTest } from 'hooks/test/selfTestHook';

function SelfTest() {
  const {
    selectedAnswer,
    handleAnswerClick,
    isButtonActive,
    handleNextButtonClick,
  } = useSelfTest('/SelfTest2');
  return (
    <Wrapper>
      <Header>
        <Title>갱년기 자가진단 테스트</Title>
        <Num>
          <span>01</span>/10
        </Num>
        <Question>
          최근 피부가 건조해지거나 탄력이 떨어진 느낌이 있나요?
        </Question>
      </Header>
      {/* <Img src={test_2} alt="test2" /> */}
      {/* 이미지 넣어주시면 됩니다! */}
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
        onClick={handleNextButtonClick}
      >
        다음
      </NextBtn>
    </Wrapper>
  );
}

export default SelfTest;
