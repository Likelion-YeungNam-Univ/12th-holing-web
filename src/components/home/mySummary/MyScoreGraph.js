import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styled from 'styled-components';

ChartJS.register(ArcElement, Tooltip, Legend);

function MyScoreGraph() {
  const value = 82;
  const data = {
    labels: ['Score'],
    datasets: [
      {
        label: 'Score',
        data: [value, 100 - value], // 82점과 나머지 18점으로 구성
        backgroundColor: ['#9180FF', '#DDDDDD'], // #9180FF로 82점 표시, #DDDDDD로 나머지 18점 표시
        borderColor: ['#9180FF', '#DDDDDD'], // 경계선 색상
        borderWidth: 0,
        borderRadius: 30, // 82% 부분은 둥글게, 18% 부분은 둥글지 않게 설정
      },
    ],
  };

  const options = {
    cutout: '80%', // 차트의 굵기 조절
    hover: { mode: null },
    plugins: {
      legend: {
        display: false, // 범례 숨기기
      },
      tooltip: {
        enabled: false, // 툴팁 숨기기
      },
    },
  };

  const Container = styled.div`
    position: relative;
    width: 164px;
    height: 164px;
  `;

  const OverlayContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center; /* 수직 정렬 */
    align-items: center; /* 수평 정렬 */
    text-align: center;
  `;

  const OverlayTotal = styled.div`
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 500;

    text-align: center;
    color: #5643d1;
  `;

  const OverlayScore = styled.div`
    font-family: Pretendard;
    font-size: 40px;
    font-weight: 600;
    line-height: 47.73px;
    text-align: center;
    color: #5643d1;
  `;

  return (
    <Container>
      <Doughnut data={data} options={options} />
      <OverlayContainer>
        <OverlayTotal>TOTAL</OverlayTotal>
        <OverlayScore>{value}</OverlayScore>
      </OverlayContainer>
    </Container>
  );
}

export default MyScoreGraph;