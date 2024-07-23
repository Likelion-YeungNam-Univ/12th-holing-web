import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CurrenttWrapper, SlideTop, SlideBottom, CurrentWeek, CurrentBtn, CurrentRank, CurrentOverView, Current } from 'styles/report/SlideItem-styled';
import { IoIosArrowForward } from "react-icons/io";

// 현재 주차 컴포넌트
function CurrentSlide() {
  const navigate = useNavigate();

  return (
    <CurrenttWrapper>
        <Current>
            <SlideTop>
              <CurrentWeek>몇주차</CurrentWeek> 
              {/* TODO : navigate uri 변경예정 */}
              <CurrentBtn>더보기<IoIosArrowForward onClick={() => navigate('/reportDetail')} size={36} style={{color:'white'}}/></CurrentBtn> 
            </SlideTop> Current
            <SlideBottom>
              <CurrentRank>Top1</CurrentRank> 
              <CurrentOverView>지난주보다~~해요</CurrentOverView>
            </SlideBottom> 
        </Current>
    </CurrenttWrapper>
  )
}
export default CurrentSlide;
