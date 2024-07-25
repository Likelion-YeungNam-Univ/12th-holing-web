import React from 'react'
import { Test, TestNum, TestText, RealNum, ChoiceList, Choice, ChoiceText } from 'styles/test/SymptomTestPage-styled'

import selectedBig from 'assets/images/test_selectedBig.svg'
import selectedSmall from 'assets/images/test_selectedSmall.svg'
import unselectedBig from 'assets/images/test_unselectedBig.svg'
import unselectedSmall from 'assets/images/test_unselectedSmall.svg'



function Tests() {
  return (
    // 문제 wrapper_ 문제별
    <Test>
      {/* 문제num */}
      <TestNum><RealNum>01</RealNum>/10</TestNum>
      {/* 문제text */}
      <TestText>잠들기까지 보통 얼만큼의 시간이 걸리시나요?</TestText>

      {/* 선택지 list */}
      {/* TODO: 선택에 따른 버튼 & 텍스트 변화 구현 예정 */}
      <ChoiceList>
        <Choice>
          <img src={selectedBig}/>
          <ChoiceText>10분 이하</ChoiceText>
        </Choice>
        <Choice>
          <img src={unselectedSmall}/>
          <ChoiceText>10분 ~30분</ChoiceText>
        </Choice>
        <Choice>
          <img src={unselectedSmall}/>
          <ChoiceText>30분 ~1시간</ChoiceText>
        </Choice>
        <Choice>
          <img src={unselectedBig}/>
          <ChoiceText>1시간 이상</ChoiceText>
        </Choice>
      </ChoiceList>
  </Test>
  )
}

export default Tests;