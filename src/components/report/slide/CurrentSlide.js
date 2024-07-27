import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CurrenttWrapper, SlideTop, SlideBottom, CurrentWeek, CurrentBtn, CurrentRank, CurrentOverView, Current, TextDecoWhite } from 'styles/report/SlideItem-styled';
import { IoIosArrowForward } from "react-icons/io";

// 현재 주차 컴포넌트
function CurrentSlide() {
  const navigate = useNavigate();

  {/* TODO : navigate uri 변경예정 */}
  const goToReportDetail = () => {
    navigate('/reportDetail');
    console.log("click!!");
  }

  return (
    <CurrenttWrapper>
        <Current>
            <SlideTop>
              <CurrentWeek>몇주차</CurrentWeek> 
              <CurrentBtn onClick={goToReportDetail}>더보기<IoIosArrowForward size={36} style={{color:'white'}}/></CurrentBtn> 
            </SlideTop>
            <SlideBottom>
              <CurrentRank>Top1</CurrentRank> 
              <CurrentOverView>지난 주보다 <TextDecoWhite>체온변화</TextDecoWhite>로 가장 큰 어려움을 겪어요</CurrentOverView>
            </SlideBottom> 
        </Current>
    </CurrenttWrapper>
  )
}
export default CurrentSlide;
