import React, { useState, useEffect } from 'react';
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

function FeSelfTest() {
  const {
    selectedAnswer,
    handleAnswerClick,
    isButtonActive,
    handleNextButtonClick,
  } = useSelfTest('/SelfTest2');

  const [statement, setStatement] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [choice1, setChoice1] = useState('');
  const [choice2, setChoice2] = useState('');
  const [choice3, setChoice3] = useState('');
  const [selfTestScore, setSelfTestScore] = useState(Array(10).fill(0));

  useEffect(() => {
    getSelftest('FEMALE', 0)
      .then((response) => {
        setStatement(response.data.content[0].statement);
        setImgUrl(response.data.content[0].imgUrl);
        setChoice1(response.data.content[0].choice1);
        setChoice2(response.data.content[0].choice2);
        setChoice3(response.data.content[0].choice3);
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
          <span>01</span>/10
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
        <Answer
          onClick={() => handleAnswerClick(choice3)}
          isSelected={selectedAnswer === choice3}
        >
          {choice3}
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
