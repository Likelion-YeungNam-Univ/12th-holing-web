import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PasttWrapper, SlideTop, SlideBottom, Past, PastWeek, PastBtn, PastRank, PastOverView, TextDecoBlue } from 'styles/report/SlideItem-styled';
import { IoIosArrowForward } from "react-icons/io";

// 이전 주차 컴포넌트
function PastSlide({ reportId, weekOfMonth, title, month, user }) {
  const navigate = useNavigate();
  
  const goToReportDetail = () => {
    navigate(`/report/${reportId}`);
    console.log("click!!");
  }

  return (
    <PasttWrapper>
      <Past>
          <SlideTop>
            <PastWeek>{month}월 {weekOfMonth}주차</PastWeek> 
            {/* TODO : reportId 파라미터로 navigate uri 변경예정 */}
            {user === 'me' ? (<PastBtn onClick={goToReportDetail}>더보기<IoIosArrowForward size={36} style={{color:'#5B5B5B'}}/></PastBtn> ) 
              : (<></>)
            }
            
          </SlideTop> 
          <SlideBottom>
            <PastRank>Top1</PastRank> 
            {/* TODO : TextDeco 적용할 text 확인하기 */}
            <PastOverView>{title}<TextDecoBlue></TextDecoBlue></PastOverView>
          </SlideBottom> 
      </Past>
    </PasttWrapper>
 
  )
}

export default PastSlide;