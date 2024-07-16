import styled from 'styled-components';
import LineChart from '../components/report/LineChart';
import TopBar from '../components/comonents/TopBar';

function Report() {
  return (
    <ReportContainer>
      {/* TODO: topbar 컴포넌트 배치예정 */}
      {/* <TopBar></TopBar> */}

      {/* 상단 리포트 컴포넌트 */}
      <Wrapper>
        <div>
          <Title>
              홀링 리포트로 나의 증상을
              <br />
              한눈으로 확인하세요
          </Title>
          {/* 그래프 컴포넌트 */}
          <GraphWrapper>
              <LineChart></LineChart>
         </GraphWrapper>
        </div>
      </Wrapper>


      {/* 하단 테스트 컴포넌트 */}
      <div>

      </div>

      {/* TODO: 메뉴 컴포넌트 배치예정 */}
    </ReportContainer>
  );
}

const ReportContainer = styled.div`
  width: 600px;
  margin: auto;
`

const Wrapper = styled.div`
  background-color: #F5F5F5;
  color: black;
  width: inherit;
  height: 740px;
  padding-top: 20px;
`;
const GraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 95%;
  height: 30%;
  background-color: white;
  margin: auto;
  border-radius: 20px;
`;
const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
`;

export default Report;
