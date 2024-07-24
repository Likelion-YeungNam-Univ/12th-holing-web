import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

import { TextDecoGray } from 'styles/report/SlideItem-styled';
import { PastWrapper, PastDropDown, PastRank2, LeftReport, BottomText, PastDetailText, DropDownBtn, PastWeek } from 'styles/report/ReportDatailPage-styled';


function DropDownPast() {
  return (
    // 과거 드롭다운
    <PastWrapper>
        <PastDropDown>
            {/* TODO : 컴포넌트에 데이터 props로 전달 예정 */}
            <LeftReport>
                <PastWeek>몇주차</PastWeek> 
                    
                <BottomText>
                    <PastRank2>Top1</PastRank2> 
                    <PastDetailText>안면홍조로 인한 <TextDecoGray>체온변화</TextDecoGray>에 가장 큰 어려움을 겪어요</PastDetailText>
                </BottomText> 
            </LeftReport>
            <DropDownBtn><IoIosArrowDown size={120} style={{color:'#8A8A8A'}}/></DropDownBtn> 
        </PastDropDown>
    </PastWrapper>
  )
}

export default DropDownPast;