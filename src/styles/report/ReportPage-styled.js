import styled, { css } from 'styled-components';

// ----- 공통속성 스타일링
const flexCenter = css`
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
  background-color: #F5F5F5;
  width: inherit;
  height: fit-content;
  padding: 20px 0 40px;
`;

export const GraphWrapper = styled.div`
  ${flexCenter}
  width: 496px;
  height: 327px;
  background-color: white;
  margin: auto;
  border-radius: 13px;
  border: 1px solid #dddddd;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  margin: 20px 0 0 20px;
  text-align: left;
  padding: 28px;
`;

// ----- 탭 컴포넌트
export const TapWrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 496px;
  height: fit-content;
  margin: auto;
`;
export const TapBtnWrapper = styled.ul`
  ${flexCenter}
  width: 100%;
  height: 30px;
  margin: auto;
  margin-bottom: 40px;
  margin-top: 40px;
`;

// 탭버튼 공통속성
const topBtn = css`
  ${flexCenter}
  width: 233px;
  border-bottom: 3px solid #d9d9d9;
  padding-bottom: 8px;
  cursor: pointer;

  font-size: 22px;
  font-weight: 600;
  line-height: 33px;
  letter-spacing: -0.02em;
  text-align: center;
`;

export const TapBtn1 = styled.li`
  ${topBtn}
  border-bottom: 3px solid #9180FF; 
  // TODO: click이벤트 연결
`;
export const TapBtn2 = styled.li`
  ${topBtn}
  color: #8A8A8A;
`;
