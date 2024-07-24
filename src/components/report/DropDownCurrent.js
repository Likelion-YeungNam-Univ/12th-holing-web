import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

import { CurrentWeek, CurrentRank, TextDecoWhite } from 'styles/report/SlideItem-styled';
import { CurrentDropDown, CurrentWrapper, LeftReport, BottomText, CurrentDetailText, DropDownBtn } from 'styles/report/ReportDatailPage-styled';


function DropDownCurrent() {
  return (
    // 현재 드롭다운
    <CurrentWrapper>
      <CurrentDropDown>
          {/* TODO : 컴포넌트에 데이터 props로 전달 예정 */}
          <LeftReport>
              <CurrentWeek>몇주차</CurrentWeek> 
                  
              <BottomText>
                  <CurrentRank>Top1</CurrentRank> 
                  <CurrentDetailText>안면홍조로 인한 <TextDecoWhite>체온변화</TextDecoWhite>에 가장 큰 어려움을 겪어요</CurrentDetailText>
              </BottomText> 
          </LeftReport>
          <DropDownBtn><IoIosArrowDown size={120} style={{color:'#5643D1'}}/></DropDownBtn> 
      </CurrentDropDown>
    </CurrentWrapper>
  )
}

export default DropDownCurrent;