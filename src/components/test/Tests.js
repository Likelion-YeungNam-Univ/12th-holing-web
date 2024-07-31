import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Test, TestNum, TestText, RealNum, ChoiceList, Choice, ChoiceText, ChoiceTextColored, TestBorder } from 'styles/test/SymptomTestPage-styled';
import selectedBig from 'assets/images/test_selectedBig.svg';
import selectedSmall from 'assets/images/test_selectedSmall.svg';
import unselectedBig from 'assets/images/test_unselectedBig.svg';
import unselectedSmall from 'assets/images/test_unselectedSmall.svg';
import useSurveyData from 'hooks/test/useSurveyData';

function Tests() {
  const [selectedChoices, setChoicestate] = useState({}); // 선택지 state 객체로 관리
  const [selectedDetails, setSelectedDetails] = useState([]); // 선택된 선택지 정보 저장

  const tests = useSurveyData(); // 문제 get API

  // 선택지 클릭 이벤트
  const handleChoiceClick = (questionId, choiceId, choiceScore, tagId, isAdditional, choiceText) => {
    setChoicestate(prevState => ({
      ...prevState,
      [questionId]: choiceId,
    }));

    setSelectedDetails(prevDetails => {
      const updatedDetails = [...prevDetails];
      
      // 해당 tagId에 대한 인덱스를 찾기
      // findeIndex - 모두 해당하지 않으면 -1 반환
      const tagIndex = updatedDetails.findIndex(detail => detail.tagId === tagId);

      // tagId가 배열에 없는 경우, 새 항목 추가
      if (tagIndex === -1) {
        updatedDetails.push({
          tagId,
          score: isAdditional ? 0 : choiceScore, // isAdditional 값 존재 경우 score는 0
          questionScores: { [questionId]: isAdditional ? 0 : choiceScore }, // 각 문제에 해당하는 score값 확인
          additional: isAdditional ? choiceText : ""
        });
      } else {  // 기존 항목 업데이트
        const currentDetail = updatedDetails[tagIndex];
        const previousScore = currentDetail.questionScores[questionId] || 0; // 특정 문제 score 가져오기

        // 점수 누적 및 추가 정보 업데이트
        if (isAdditional) {
          currentDetail.additional = choiceText;
        } else {
          currentDetail.score = currentDetail.score - previousScore + choiceScore;
          currentDetail.questionScores[questionId] = choiceScore;
        }

        // 배열 업데이트
        updatedDetails[tagIndex] = currentDetail;
      }

      console.log('Updated Details:', updatedDetails);

      return updatedDetails;
    });
  };

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

    postTest();
  };

  
  // 서버로 POST 요청
  const postTest = async () => {
    const authToken = process.env.REACT_APP_API_AUTH_TOKEN;
    const serverUrl = process.env.REACT_APP_API_URL;
    const endpoint = '/reports';
    const apiUrl = `${serverUrl}${endpoint}`;

    try {
      // questionScores 제외한 데이터 생성
      const filteredDetails = selectedDetails.map(detail => {
        const { questionScores, ...rest } = detail;
        return rest;
      });

      console.log('Sending data to server:', JSON.stringify(filteredDetails, null, 2)); // 전송 데이터 확인

      const res = await axios.post(apiUrl, filteredDetails, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        // data: filteredDetails
      });

      console.log('filteredDetails=', filteredDetails);
      // console.log('server response =', res.data);
      alert(res.data);
      return res.data;
    } catch (error) {
      console.log('Error details:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  // 선택지 배열 함수 - 선택지 선택별 스타일 적용 + 점수 적용 목적
  const createChoices = (test) => {
    return [
      { id: 'choice1', score: 0, text: test.choice1, selectedImg: selectedBig, unselectedImg: unselectedBig },
      { id: 'choice2', score: 2, text: test.choice2, selectedImg: selectedSmall, unselectedImg: unselectedSmall },
      { id: 'choice3', score: 4, text: test.choice3, selectedImg: selectedSmall, unselectedImg: unselectedSmall },
      { id: 'choice4', score: 6, text: test.choice4, selectedImg: selectedBig, unselectedImg: unselectedBig }
    ];
  };

  return (
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
      <button onClick={handleSubmit}>제출하기</button>
    </Test>
  );
}

export default Tests;
