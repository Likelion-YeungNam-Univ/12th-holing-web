import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io'; // 아래방향 arrow
import { IoIosArrowUp } from 'react-icons/io'; // 위쪽방향 arrow

import {
  CurrentWeek,
  CurrentRank,
  TextDecoWhite,
} from 'styles/report/SlideItem-styled';
import {
  CurrentDropDown,
  CurrentWrapper,
  LeftReport,
  BottomText,
  CurrentDetailText,
  DropDownBtn,
} from 'styles/report/ReportDatailPage-styled';
import {
  SolutionWrapper,
  MainSolution,
  SolutionList,
} from 'styles/report/ReportDropDown-styled';
import CurrentSolution from './CurrentSolution';

function DropDownCurrent() {
  const [togglestate, setToggleState] = useState(false);

  // 드롭다운 버튼 토글
  const ToggleState = () => {
    setToggleState(!togglestate);
  };

  return (
    <>
      {/* 현재 드롭다운 */}
      <CurrentWrapper>
        <CurrentDropDown>
          {/* TODO : 컴포넌트에 데이터 props로 전달 예정 */}
          <LeftReport>
            <CurrentWeek>몇주차</CurrentWeek>

            <BottomText>
              <CurrentRank>Top1</CurrentRank>
              <CurrentDetailText>
                안면홍조로 인한 <TextDecoWhite>체온변화</TextDecoWhite>에 가장
                큰 어려움을 겪어요
              </CurrentDetailText>
            </BottomText>
          </LeftReport>

          {/* 토글상태에 따른 arrow 아이콘 변경 */}
          <DropDownBtn onClick={ToggleState}>
            {togglestate ? (
              <IoIosArrowDown size={120} style={{ color: '#5643D1' }} />
            ) : (
              <IoIosArrowUp size={120} style={{ color: '#5643D1' }} />
            )}
          </DropDownBtn>
        </CurrentDropDown>

        {/* 토글됐을 때 */}
        {togglestate && (
          <SolutionWrapper>
            <MainSolution>
              갱년기 수면장애는 여성호르몬의 감소로 인해 야간 안면홍조와 야간
              발한을 일으키고, 이는 불면증과 같은 수면장애를 일으킵니다. 즉
              잠자리에서 야간발한과 안면홍조 증상은 깊은 수면에 많은 방해가
              됩니다.
            </MainSolution>

            <SolutionList>
              {/* TODO : props 전달 예정 */}
              {/* 해결법  01 ~ 03 */}
              <CurrentSolution></CurrentSolution>
              <CurrentSolution></CurrentSolution>
              <CurrentSolution></CurrentSolution>
            </SolutionList>
          </SolutionWrapper>
        )}
      </CurrentWrapper>
    </>
  );
}

export default DropDownCurrent;
