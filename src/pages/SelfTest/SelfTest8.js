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
  Img,
} from 'styles/selfTest/selfTest-styled';
import { useSelfTest } from 'hooks/test/selfTestHook';

function SelfTest() {
  const {
    selectedAnswer,
    handleAnswerClick,
    isButtonActive,
    handleNextButtonClick,
  } = useSelfTest('/SelfTest9');

  return (
    <Wrapper>
      <Header>
        <Title>갱년기 자가진단 테스트</Title>
        <Num>
          <span>08</span>/10
        </Num>
        <Question>가슴 두근거림이 하루 2번이상 발생하나요?</Question>
      </Header>
      {/* <Img src={test_9} alt="test9" /> */}
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
        onClick={handleNextButtonClick} // 클릭 시 페이지 이동
      >
        다음
      </NextBtn>
    </Wrapper>
  );
}

export default SelfTest;
