import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CurrenttWrapper, SlideTop, SlideBottom, CurrentWeek, CurrentBtn, CurrentRank, CurrentOverView, Current, TextDecoWhite } from 'styles/report/SlideItem-styled';
import { IoIosArrowForward } from "react-icons/io";

// 현재 주차 컴포넌트
function CurrentSlide( { reportId, weekOfMonth, title, month } ) {
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
              <CurrentWeek>{month}월 {weekOfMonth}주차</CurrentWeek> 
              {/* TODO : reportId 파라미터로 navigate uri 변경예정 */}
              <CurrentBtn onClick={goToReportDetail}>더보기<IoIosArrowForward size={36} style={{color:'white'}}/></CurrentBtn> 
            </SlideTop>
            <SlideBottom>
              <CurrentRank>Top1</CurrentRank> 
              {/* TODO : TextDeco 적용할 text 확인하기 */}
              <CurrentOverView>{title}<TextDecoWhite></TextDecoWhite></CurrentOverView>
            </SlideBottom> 
        </Current>
    </CurrenttWrapper>
  )
}
export default CurrentSlide;
