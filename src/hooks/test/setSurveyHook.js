import { useState } from 'react';

const setSurveyHook = () => {

  const [selectedChoices, setChoicestate] = useState({}); // 선택지 state 객체로 관리
  const [selectedDetails, setSelectedDetails] = useState([]); // 선택된 선택지 정보 저장


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

  return {
    selectedChoices,
    selectedDetails,
    handleChoiceClick
  }

}

export default setSurveyHook;
