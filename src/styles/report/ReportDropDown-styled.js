import styled, {css} from 'styled-components';


// 공통속성 스타일링
const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// DropDown 컴포넌트
export const SolutionWrapper = styled.div`
  background-color: #ffffff;
  width: 496px;
  height: 636px;
`
export const MainSolution = styled.div`
  width: 399px;
  height: 96px;
  font-weight: 400;
  font-size: 17px;
  line-height: 23.8px;
  color: #8A8A8A;
  margin: 33px 61px 0 36px;
`
export const SolutionList = styled.div`
  ${flexCenter}
  flex-direction: column;
  margin-top: 16px;
`

// ReportSolution 컴포넌트
export const Solution = styled.div`
  display: flex;
  align-items: center;
  width: 424px;
  height: 134px;
  margin-bottom: 20px;
`
export const SolutionNumBlue = styled.div`
  font-weight: 200;
  font-size: 96px;
  line-height: 134.4px;
  color: #9180FF;
  margin-right: 57px;
  width: 80px;
`
export const SolutionNumGray = styled.div`
  font-weight: 200;
  font-size: 96px;
  line-height: 134.4px;
  color: #8A8A8A;
  margin-right: 57px;
  width: 80px;
`
export const SolutionText = styled.div`
  width: 280px;
  height: fit-content;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
`