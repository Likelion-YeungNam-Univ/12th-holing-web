import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PasttWrapper, SlideTop, SlideBottom, Past, PastWeek, PastBtn, PastRank, PastOverView } from 'styles/report/SlideItem-styled';
import { IoIosArrowForward } from "react-icons/io";

// 이전 주차 컴포넌트
function PastSlide() {
  const navigate = useNavigate();

  return (
    <PasttWrapper>
      <Past>
          <SlideTop>
          <PastWeek>몇주차</PastWeek> 
          {/* TODO : navigate uri 변경예정 */}
          <PastBtn>더보기<IoIosArrowForward onClick={() => navigate('/reportDetail')} size={36} style={{color:'#5B5B5B'}}/></PastBtn> 
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