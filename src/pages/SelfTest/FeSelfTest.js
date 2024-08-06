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
import LogoCenterBar from 'components/comonents/topBar/LogoCenterTopBar';

function FeSelfTest() {
  const {
    selectedAnswer,
    handleAnswerClick,
    isButtonActive,
    handleNextButtonClickWithScore,
  } = useSelfTest('/SelfTest2');

  const [statement, setStatement] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [choice1, setChoice1] = useState('');
  const [choice2, setChoice2] = useState('');
  const [choice3, setChoice3] = useState('');
  const [page, setPage] = useState('');

  useEffect(() => {
    getSelftest('FEMALE', 0)
      .then((response) => {
        setPage(response.data.pageable.pageNumber);
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

  const handleNext = () => {
    // 로컬 스토리지에서 selfTestScore 값을 가져오고, 값이 없으면 길이 10의 배열을 생성
    const currentScores =
      JSON.parse(localStorage.getItem('selfTestScore')) || Array(10).fill(0);
    // 현재 페이지 번호를 인덱스로 사용
    const scoreIndex = page;
    // 선택된 답변에 따라 점수를 설정
    if (selectedAnswer === choice1) {
      currentScores[scoreIndex] = 2;
    } else if (selectedAnswer === choice2 || selectedAnswer === choice3) {
      currentScores[scoreIndex] = 0;
    }
    // 업데이트된 점수를 로컬 스토리지에 저장
    localStorage.setItem('selfTestScore', JSON.stringify(currentScores));
    // 다음 페이지로 이동
    handleNextButtonClickWithScore();
  };

  return (
    <>
      <LogoCenterBar></LogoCenterBar>
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
          onClick={handleNext} // 클릭 시 페이지 이동
        >
          다음
        </NextBtn>
      </Wrapper>
    </>
  );
}

export default FeSelfTest;
