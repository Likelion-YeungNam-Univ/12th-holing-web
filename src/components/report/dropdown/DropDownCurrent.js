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



function DropDownCurrent( {title, solution, week, rank} ) {
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
          <LeftReport>
            <CurrentWeek>{week}주차</CurrentWeek>

            <BottomText>
              <CurrentRank>TOP{rank}</CurrentRank>
              <CurrentDetailText>
                {/* TODO : 키워드 TextDecoWhite 적용*/}
                {title}
              </CurrentDetailText>
            </BottomText>
          </LeftReport>

          {/* 토글상태에 따른 arrow 아이콘 변경 */}
          <DropDownBtn onClick={ToggleState}>
            {togglestate ? (
              <IoIosArrowUp size={120} style={{ color: '#5643D1' }} />
            ) : (
              <IoIosArrowDown size={120} style={{ color: '#5643D1' }} />
            )}
          </DropDownBtn>
        </CurrentDropDown>

        {/* 토글됐을 때 */}
        {togglestate && (
          <SolutionWrapper>
            <MainSolution>{solution.summary}</MainSolution>

            <SolutionList>
              {/* 해결법  01 ~ 03 */}
              {/* 객체타입이라 배열로 변환 */}
              {Object.keys(solution)
                // solution에서 content 인것만 
                .filter(key => key.startsWith('content'))
                .map((key, index) => (
                  <CurrentSolution key={index} content={solution[key]} id={index+1}></CurrentSolution>
                ))}
              {/* TODO : 밑부분 solution컴포넌트 */}
            </SolutionList>
          </SolutionWrapper>
        )}
      </CurrentWrapper>
    </>
  );
}

export default DropDownCurrent;
