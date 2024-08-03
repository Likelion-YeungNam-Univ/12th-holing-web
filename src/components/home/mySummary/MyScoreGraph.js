import React from 'react';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {
  Container,
  OverlayContainer,
  OverlayScore,
  OverlayTotal,
} from 'styles/home/MyScoreGraph-styled';
import { getMyReport } from 'apis/user/myReportGet';

ChartJS.register(ArcElement, Tooltip, Legend);

function MyScoreGraph() {
  const [value, setValue] = useState('');
  const [userRecentReport, setUserRecentReport] = useState('');

  useEffect(() => {
    getMyReport()
      .then((response) => {
        const data = response.data;
        setValue(data.userRecentReport.totalScore);
        setUserRecentReport(data.userRecentReport);
      })
      .catch((error) => {
        //console.error('Error fetching user data:', error);
      });
  }, []);

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

  return (
    <Container>
      <Doughnut data={data} options={options} />
      <OverlayContainer>
        <OverlayTotal>{userRecentReport ? `TOTAL` : '테스트 시작'}</OverlayTotal>
        <OverlayScore>{value}</OverlayScore>
      </OverlayContainer>
    </Container>
  );
}

export default MyScoreGraph;
