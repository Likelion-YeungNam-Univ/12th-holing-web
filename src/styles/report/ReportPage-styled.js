import styled, { css } from 'styled-components';

// ----- 공통속성 스타일링
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReportContainer = styled.div`
  width: 600px;
  margin: auto;
`;

export const TopWrapper = styled.div`
  color: black;
  width: inherit;
  height: 740px;
  padding-top: 20px;
`;

export const GraphWrapper = styled.div`
  ${flexCenter}
  width: 496px;
  height: 327px;
  background-color: white;
  margin: auto;
  border-radius: 13px;
  border: 1px solid #DDDDDD
`;

export const Title = styled.h2`
  font-size: 22px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

// ----- 탭 컴포넌트
export const TapWrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 496px;
  height: 80%;
  margin: auto;
`;
export const TapBtnWrapper = styled.ul`
  ${flexCenter}
  width: 100%;
  height: 30px;
  margin: auto;
  margin-bottom: 40px;
  margin-top: 80px;
`;

// 탭버튼 공통속성
export const topBtn = css`  
  ${flexCenter}
  width: 233px;
  font-size: 24px;
  border-bottom: 3px solid #D9D9D9;
  padding-bottom: 8px;
  cursor: pointer;
`;

export const TapBtn1 = styled.li`
  ${topBtn}
  border-bottom: 3px solid #9180FF; // TODO: click이벤트 연결

`;
export const TapBtn2 = styled.li`
  ${topBtn}
`;



// ----- 슬라이딩 컴포넌트
export const SlideWrapper = styled.div`  
  display: flex;
  height: 213px;
  width: fit-content;
  margin-top: 40px;
  border: 1px solid #FFFFFF
`;