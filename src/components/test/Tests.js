import React, { useState } from 'react'
import { Test, TestNum, TestText, RealNum, ChoiceList, Choice, ChoiceText, ChoiceTextColored } from 'styles/test/SymptomTestPage-styled'

import selectedBig from 'assets/images/test_selectedBig.svg'
import selectedSmall from 'assets/images/test_selectedSmall.svg'
import unselectedBig from 'assets/images/test_unselectedBig.svg'
import unselectedSmall from 'assets/images/test_unselectedSmall.svg'


function Tests() {
  // 선택지 state 관리
  const [selectedChoice, setChoicestate ] = useState();

  // 선택지 클릭 이벤트
  const handleChoiceClick = (choice) =>{
    setChoicestate(choice);
  }

  // 선택지 배열
  // TODO : GET data로 교체예정
  const choices = [
    { id: 'choice1', text: '10분 이하', selectedImg: selectedBig, unselectedImg: unselectedBig },
    { id: 'choice2', text: '10분 ~30분', selectedImg: selectedSmall, unselectedImg: unselectedSmall },
    { id: 'choice3', text: '30분 ~1시간', selectedImg: selectedSmall, unselectedImg: unselectedSmall },
    { id: 'choice4', text: '1시간 이상', selectedImg: selectedBig, unselectedImg: unselectedBig }
  ];

  return (
    // 문제 wrapper_ 문제별
    <Test>
      {/* 문제num */}
      <TestNum><RealNum>01</RealNum>/10</TestNum>
      {/* 문제text */}
      <TestText>잠들기까지 보통 얼만큼의 시간이 걸리시나요?</TestText>

      {/* 선택지 list */}
      {/* TODO: 선택에 따른 값 전달 구현 예정 */}
      <ChoiceList>

        {/* choices 배열을 이용해 프로퍼티 값 사용 */}
        {choices.map(choice => (
          <Choice key={choice.id} onClick={() => handleChoiceClick(choice.id)}>
            <img src={selectedChoice === choice.id ? choice.selectedImg : choice.unselectedImg} alt={choice.text}/>
            {selectedChoice === choice.id ? <ChoiceTextColored>{choice.text}</ChoiceTextColored> : <ChoiceText>{choice.text}</ChoiceText>}
          </Choice>
        ))}
        
      </ChoiceList>
  </Test>
  )
}

export default Tests;