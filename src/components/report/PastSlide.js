import React from 'react'
import { PasttWrapper, SlideTop, SlideBottom, Past, PastWeek, PastBtn, PastRank, PastOverView } from 'styles/report/SlideItem-styled';
import { IoIosArrowForward } from "react-icons/io";

function PastSlide() {
  return (
    // 이전 주차 컴포넌트
    <PasttWrapper>
      <Past>
          <SlideTop>
          <PastWeek>몇주차</PastWeek> 
          <PastBtn>더보기<IoIosArrowForward size={36} style={{color:'#5B5B5B'}}/></PastBtn> 
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