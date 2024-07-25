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
        <Choice onClick={()=>{handleChoiceClick('choice1')}}>
          <img src={ selectedChoice === 'choice1' ? selectedBig : unselectedBig }/>
          {selectedChoice === 'choice1' ? <ChoiceTextColored>10분 이하</ChoiceTextColored> : <ChoiceText>10분 이하</ChoiceText>}
        </Choice>
        <Choice onClick={()=>{handleChoiceClick('choice2')}}>
          <img src={ selectedChoice === 'choice2' ? selectedSmall : unselectedSmall }/>
          {selectedChoice === 'choice2' ? <ChoiceTextColored>10분 ~30분</ChoiceTextColored> : <ChoiceText>10분 ~30분</ChoiceText>}
        </Choice>
        <Choice onClick={()=>{handleChoiceClick('choice3')}}>
          <img src={ selectedChoice === 'choice3' ? selectedSmall : unselectedSmall }/>
          {selectedChoice === 'choice3' ? <ChoiceTextColored>30분 ~1시간</ChoiceTextColored> : <ChoiceText>30분 ~1시간</ChoiceText>}
        </Choice>
        <Choice onClick={()=>{handleChoiceClick('choice4')}}>
          <img src={ selectedChoice === 'choice4' ? selectedBig : unselectedBig }/>
          {selectedChoice === 'choice4' ? <ChoiceTextColored>1시간 이상</ChoiceTextColored> : <ChoiceText>1시간 이상</ChoiceText>}
        </Choice>
      </ChoiceList>
  </Test>
  )
}

export default Tests;