import LineChart from '../components/report/LineChart';
import {ReportContainer, Wrapper, GraphWrapper, Title} from '../styles/report/ReportPage-styled';

function Report() {
  return (
    <ReportContainer>
      {/* 상단 리포트 컴포넌트 */}
      <Wrapper>
        <Title>
          홀링 리포트로 나의 증상을
          <br />
          한눈으로 확인하세요
        </Title>

        {/* 그래프 컴포넌트 */}
        <GraphWrapper>
          <LineChart></LineChart>
        </GraphWrapper>
      </Wrapper>

      {/* TODO: 하단 테스트 컴포넌트 */}
    </ReportContainer>
  );
}

export default Report;
