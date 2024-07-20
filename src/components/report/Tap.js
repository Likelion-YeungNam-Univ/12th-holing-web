import LineChart from 'components/report/LineChart';
import SlideAnimation from 'components/report/SlideAnimation';
import React from 'react'
import {
    GraphWrapper,
    TapWrapper,
    TapBtnWrapper,
    TapBtn1,
    TapBtn2
} from 'styles/report/ReportPage-styled';

function Tap({ leftTap, setLeftState, setRightState }) {
    
  const toggleTap = () => {
    setLeftState(!leftTap);
    setRightState(!leftTap);
  }

  return (
    <TapWrapper>
          {/* 탭버튼 */}
          <TapBtnWrapper>
            
            {leftTap ? (
            // 내탭 클릭(초기상태)
            <>
              <TapBtn1>나의 증상분석</TapBtn1>
              <TapBtn2 onClick={toggleTap}>짝꿍의 증상분석</TapBtn2>
            </>
            )
            :(
            // 짝꿍탭 클릭
            <>
              <TapBtn2 onClick={toggleTap}>나의 증상분석</TapBtn2>
              <TapBtn1>짝꿍의 증상분석</TapBtn1>
            </>
            )}
          </TapBtnWrapper>

          {/* 그래프*/}
          <GraphWrapper>
            <LineChart />
          </GraphWrapper>

          {/* 슬라이드*/}
          <SlideAnimation />
        </TapWrapper>
  )
}

export default Tap;
