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

function DropDownPast( {title, solution, week, rank} ) {
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
          <LeftReport>
            <PastWeek>{week}주차</PastWeek>

            <BottomText>
              <PastRank2>TOP{rank}</PastRank2>
              <PastDetailText>
                {/* TODO : 키워드 TextDecoGray 적용*/}
                {title}
              </PastDetailText>
            </BottomText>
          </LeftReport>

          {/* 토글상태에 따른 arrow 아이콘 변경 */}
          <DropDownBtn onClick={ToggleState}>
            {togglestate ? (
              <IoIosArrowUp size={120} style={{ color: '#8A8A8A' }} />
            ) : (
              <IoIosArrowDown size={120} style={{ color: '#8A8A8A' }} />
            )}
          </DropDownBtn>
        </PastDropDown>

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
                  <PastSolution key={index} content={solution[key]} id={index+1}></PastSolution>
                ))}
              {/* TODO : 밑부분 solution컴포넌트 */}
            </SolutionList>
          </SolutionWrapper>
        )}
      </PastWrapper>
    </>
  );
}

export default DropDownPast;
