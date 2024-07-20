import React from 'react'
import { PasttWrapper, SlideTop, SlideBottom, Past, PastWeek, PastBtn, PastRank, PastOverView } from 'styles/report/SlideItem-styled';

function PastSlide() {
  return (
    // 이전 주차 컴포넌트
    <PasttWrapper>
      <Past>
          <SlideTop>
          <PastWeek>몇주차</PastWeek> 
          <PastBtn>더보기</PastBtn> 
          </SlideTop> 
          <SlideBottom>
          <PastRank>Top1</PastRank> 
          <PastOverView>지난주보다~~해요</PastOverView>
          </SlideBottom> 
      </Past>
    </PasttWrapper>
 
  )
}

export default PastSlide;