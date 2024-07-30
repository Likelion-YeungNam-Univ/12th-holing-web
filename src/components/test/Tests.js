import React, { useState } from 'react';
import { Test, TestNum, TestText, RealNum, ChoiceList, Choice, ChoiceText, ChoiceTextColored, TestBorder } from 'styles/test/SymptomTestPage-styled';
import selectedBig from 'assets/images/test_selectedBig.svg';
import selectedSmall from 'assets/images/test_selectedSmall.svg';
import unselectedBig from 'assets/images/test_unselectedBig.svg';
import unselectedSmall from 'assets/images/test_unselectedSmall.svg';
import useSurveyData from 'hooks/test/useSurveyData';

function Tests() {
  const [selectedChoices, setChoicestate] = useState({}); // 선택지 state 객체로 관리
  const tests = useSurveyData(); // 문제 list

  // 선택지 클릭 이벤트
  const handleChoiceClick = (questionId, choiceId) => {
    setChoicestate(prevState => ({
      ...prevState,
      [questionId]: choiceId
    }));
  }

  // 선택지 배열 함수
  const createChoices = (test) => {
    return [
      { id: 'choice1', text: test.choice1, selectedImg: selectedBig, unselectedImg: unselectedBig },
      { id: 'choice2', text: test.choice2, selectedImg: selectedSmall, unselectedImg: unselectedSmall },
      { id: 'choice3', text: test.choice3, selectedImg: selectedSmall, unselectedImg: unselectedSmall },
      { id: 'choice4', text: test.choice4, selectedImg: selectedBig, unselectedImg: unselectedBig }
    ];
  };

  return (
    <Test>
    {tests.map(test => {
      const choices = createChoices(test);
      return(
        <TestBorder key={test.id}>
          <TestNum><RealNum>{test.id}</RealNum>/17</TestNum>
          <TestText>{test.statement}</TestText>

          <ChoiceList>
              {choices.map(choice => (
                <Choice 
                  key={choice.id} 
                  onClick={() => handleChoiceClick(test.id, choice.id)}
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
      )
    })}
    </Test>
  )
}

export default Tests;
