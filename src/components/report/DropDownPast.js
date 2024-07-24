import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io'; // 아래방향 arrow
import { IoIosArrowUp } from 'react-icons/io'; // 위쪽방향 arrow

import { TextDecoGray } from 'styles/report/SlideItem-styled';
import {
  SolutionWrapper,
  MainSolution,
  SolutionList,
} from 'styles/report/ReportDropDown-styled';
import {
  PastWrapper,
  PastDropDown,
  PastRank2,
  LeftReport,
  BottomText,
  PastDetailText,
  DropDownBtn,
  PastWeek,
} from 'styles/report/ReportDatailPage-styled';

import PastSolution from './PastSolution';

function DropDownPast() {
  const [togglestate, setToggleState] = useState(false);

  // 드롭다운 버튼 토글
  const ToggleState = () => {
    setToggleState(!togglestate);
  };

  return (
    <>
      {/* 과거 드롭다운 */}
      <PastWrapper>
        <PastDropDown>
          {/* TODO : 컴포넌트에 데이터 props로 전달 예정 */}
          <LeftReport>
            <PastWeek>몇주차</PastWeek>

            <BottomText>
              <PastRank2>Top1</PastRank2>
              <PastDetailText>
                안면홍조로 인한 <TextDecoGray>체온변화</TextDecoGray>에 가장 큰
                어려움을 겪어요
              </PastDetailText>
            </BottomText>
          </LeftReport>

          {/* 토글상태에 따른 arrow 아이콘 변경 */}
          <DropDownBtn onClick={ToggleState}>
            {togglestate ? (
              <IoIosArrowDown size={120} style={{ color: '#8A8A8A' }} />
            ) : (
              <IoIosArrowUp size={120} style={{ color: '#8A8A8A' }} />
            )}
          </DropDownBtn>
        </PastDropDown>

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
              <PastSolution></PastSolution>
              <PastSolution></PastSolution>
              <PastSolution></PastSolution>
            </SolutionList>
          </SolutionWrapper>
        )}
      </PastWrapper>
    </>
  );
}

export default DropDownPast;
