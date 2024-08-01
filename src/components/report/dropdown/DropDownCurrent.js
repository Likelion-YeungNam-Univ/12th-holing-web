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



function DropDownCurrent( {title, solution, week} ) {
  const [togglestate, setToggleState] = useState(false);
  // console.log("reportList = ", reportList);


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
            <CurrentWeek>{week}주차</CurrentWeek>

            <BottomText>
              <CurrentRank>Top1</CurrentRank>
              <CurrentDetailText>
                {/* TODO : 키워드 TextDecoWhite 적용*/}
                {title}
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
            <MainSolution>{solution.summary}</MainSolution>

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
