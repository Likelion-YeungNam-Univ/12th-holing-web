import React from 'react'
import { CurrenttWrapper, SlideTop, SlideBottom, CurrentWeek, CurrentBtn, CurrentRank, CurrentOverView, Current } from 'styles/report/SlideItem-styled';
import { IoIosArrowForward } from "react-icons/io";

function CurrentSlide() {
  return (
    // 현재 주차 컴포넌트
    <CurrenttWrapper>
        <Current>
            <SlideTop>
              <CurrentWeek>몇주차</CurrentWeek> 
              <CurrentBtn>더보기<IoIosArrowForward size={36} style={{color:'white'}}/></CurrentBtn> 
            </SlideTop> 
            <SlideBottom>
              <CurrentRank>Top1</CurrentRank> 
              <CurrentOverView>지난주보다~~해요</CurrentOverView>
            </SlideBottom> 
        </Current>
    </CurrenttWrapper>
  )
}
export default CurrentSlide;
