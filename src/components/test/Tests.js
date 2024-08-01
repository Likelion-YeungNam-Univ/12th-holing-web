import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TestMenuBar from 'components/comonents/menuBar/TestMenuBar';
import { Test, TestNum, TestText, RealNum, ChoiceList, Choice, ChoiceText, ChoiceTextColored, TestBorder } from 'styles/test/SymptomTestPage-styled';
import selectedBig from 'assets/images/test_selectedBig.svg';
import selectedSmall from 'assets/images/test_selectedSmall.svg';
import unselectedBig from 'assets/images/test_unselectedBig.svg';
import unselectedSmall from 'assets/images/test_unselectedSmall.svg';

import postSurvey from 'apis/test/postSurvey';
import setSurveyHook from 'hooks/test/setSurveyHook';
import getSurveyHook from 'hooks/test/getSurveyHook';


function Tests() {
  const navigate = useNavigate();

  const tests = getSurveyHook(); // 문제 get API
  const  {selectedChoices, selectedDetails, handleChoiceClick } = setSurveyHook(); // 선택지 저장 HOOK

  // 상태 업데이트 후 selectedDetails 확인
  useEffect(() => {
    console.log('Selected Details:', selectedDetails);
  }, [selectedDetails]);


  // 모든 문제의 선택지 입력 여부 확인 함수
  const allQuestionsAnswered = () => {
    return tests.every(test => selectedChoices[test.id] !== undefined);
  };

  // 제출 버튼 클릭 이벤트
  const handleSubmit = () => {
    if (!allQuestionsAnswered()) {
      alert('모든 문제의 선택지를 입력해 주세요!');
      return;
    }
    postSurvey(selectedDetails, navigate);  // 결과 post API
  };


  // 선택지 배열 함수 = 선택지 선택별 스타일 적용 + 점수 적용 목적
  const createChoices = (test) => {
    return [
      { id: 'choice1', score: 0, text: test.choice1, selectedImg: selectedBig, unselectedImg: unselectedBig },
      { id: 'choice2', score: 2, text: test.choice2, selectedImg: selectedSmall, unselectedImg: unselectedSmall },
      { id: 'choice3', score: 4, text: test.choice3, selectedImg: selectedSmall, unselectedImg: unselectedSmall },
      { id: 'choice4', score: 6, text: test.choice4, selectedImg: selectedBig, unselectedImg: unselectedBig }
    ];
  };

  return (
    <>
      <Test>
        {tests.map(test => {
          const choices = createChoices(test);
          return (
            <TestBorder key={test.id}>
              <TestNum><RealNum>{test.id}</RealNum>/17</TestNum>
              <TestText>{test.statement}</TestText>

              <ChoiceList>
                {choices.map(choice => (
                  <Choice
                    key={choice.id}
                    onClick={() => handleChoiceClick(test.id, choice.id, choice.score, test.tagDto.id, test.isAdditional, choice.text)}
                  >
                    <img
                      src={selectedChoices[test.id] === choice.id ? choice.selectedImg : choice.unselectedImg}
                      alt={choice.text}
                    />
                    {selectedChoices[test.id] === choice.id ? <ChoiceTextColored>{choice.text}</ChoiceTextColored> : <ChoiceText>{choice.text}</ChoiceText>}
                  </Choice>
                ))}
              </ChoiceList>
            </TestBorder>
          );
        })}
      </Test>
      <TestMenuBar onClick={handleSubmit}>제출하기</TestMenuBar>

    </>
  );
}

export default Tests;
