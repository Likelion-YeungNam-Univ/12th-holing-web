import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PasttWrapper, SlideTop, SlideBottom, Past, PastWeek, PastBtn, PastRank, PastOverView, TextDecoBlue } from 'styles/report/SlideItem-styled';
import { IoIosArrowForward } from "react-icons/io";

// 이전 주차 컴포넌트
function PastSlide() {
  const navigate = useNavigate();

  {/* TODO : navigate uri 변경예정 */}
  const goToReportDetail = () => {
    navigate('/reportDetail');
    console.log("click!!");
  }

  return (
    <PasttWrapper>
      <Past>
          <SlideTop>
          <PastWeek>몇주차</PastWeek> 
          {/* TODO : navigate uri 변경예정 */}
          {/* TODO : 배우자일시, 더보기 컴포넌트 제거 */}
          <PastBtn onClick={goToReportDetail}>더보기<IoIosArrowForward size={36} style={{color:'#5B5B5B'}}/></PastBtn> 
          </SlideTop> 
          <SlideBottom>
          <PastRank>Top1</PastRank> 
          <PastOverView>지난 주보다 <TextDecoBlue>체온변화</TextDecoBlue>로 가장 큰 어려움을 겪어요</PastOverView>
          </SlideBottom> 
      </Past>
    </PasttWrapper>
 
  )
}

export default PastSlide;