import React from 'react';
import { useState, useEffect } from 'react';
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
import { getSelftest } from 'apis/selftest/selftestGet';

function SelfTest() {
  const {
    selectedAnswer,
    handleAnswerClick,
    isButtonActive,
    handleNextButtonClick,
  } = useSelfTest('/SelfTest6');

  const [statement, setStatement] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [choice1, setChoice1] = useState('');
  const [choice2, setChoice2] = useState('');

  useEffect(() => {
    // 2번 문제부터 gender에 상관없이 문제 동일
    getSelftest('MALE', 4)
      .then((response) => {
        setStatement(response.data.content[0].statement);
        setImgUrl(response.data.content[0].imgUrl);
        setChoice1(response.data.content[0].choice1);
        setChoice2(response.data.content[0].choice2);
      })
      .catch((error) => {
        console.error('Error fetching self-test:', error);
      });
  }, []);

  return (
    <Wrapper>
      <Header>
        <Title>갱년기 자가진단 테스트</Title>
        <Num>
          <span>05</span>/10
        </Num>
        <Question>{statement}</Question>
      </Header>
      <Img src={imgUrl} alt="test1"></Img>
      <AnsContainer>
        <Answer
          onClick={() => handleAnswerClick(choice1)}
          isSelected={selectedAnswer === choice1}
        >
          {choice1}
        </Answer>
        <Answer
          onClick={() => handleAnswerClick(choice2)}
          isSelected={selectedAnswer === choice2}
        >
          {choice2}
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
