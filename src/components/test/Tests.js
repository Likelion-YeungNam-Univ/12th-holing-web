import React, { useEffect, useState } from 'react';
import { Test, TestNum, TestText, RealNum, ChoiceList, Choice, ChoiceText, ChoiceTextColored } from 'styles/test/SymptomTestPage-styled';
import selectedBig from 'assets/images/test_selectedBig.svg';
import selectedSmall from 'assets/images/test_selectedSmall.svg';
import unselectedBig from 'assets/images/test_unselectedBig.svg';
import unselectedSmall from 'assets/images/test_unselectedSmall.svg';
import axios from 'axios';

function Tests() {
  // 선택지 state 객체로 관리
  const [selectedChoices, setChoicestate] = useState({});
  // 문제 list 관리
  const [tests, setTests] = useState([]);

  // 선택지 클릭 이벤트
  const handleChoiceClick = (questionId, choiceId) => {
    setChoicestate(prevState => ({
      ...prevState,
      [questionId]: choiceId
    }));
  }

  const authToken = process.env.REACT_APP_API_AUTH_TOKEN;
  const serverUrl = process.env.REACT_APP_API_URL;
  const endpoint = '/questions/symptom';
  const apiUrl = `${serverUrl}${endpoint}`;

  const getSurvey = async () => {
    try {
      const res = await axios.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json', 
          Authorization: `Bearer ${authToken}`
        },
      });

      const testList = res.data;
      setTests(testList);
      console.log("tests[0] = ", testList[0]);

    } catch (error) {
      console.log('Error details:', error.response ? error.response.data : error.message);
    }
  }

  useEffect(() => {
    getSurvey();
  }, []);


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
        <div key={test.id}>
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
        </div>
      )
    })}
    </Test>
  )
}

export default Tests;
