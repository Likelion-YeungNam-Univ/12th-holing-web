import styled from 'styled-components';
import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import getGraphHook from 'hooks/report/getGraphHook';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// 그래프 옵션 설정
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        font: {
          size: 10, // 범례 글자 크기 조정
        },
        boxWidth: 12, // 범례 아이콘 너비 조정
        boxHeight: 10, // 범례 아이콘 높이 조정
        generateLabels: function (chart) {
          return chart.data.datasets.map(function (dataset) {
            return {
              text: getKoreanLabel(dataset.label), // 라벨을 한국어로 변환
              fillStyle: dataset.backgroundColor, // 각 데이터셋의 backgroundColor를 fillStyle로 사용
              hidden: false,
              lineCap: 'round',
              lineDash: [],
              lineDashOffset: 0.0,
              lineJoin: 'round',
              lineWidth: 1,
              strokeStyle: dataset.borderColor,
              pointStyle: 'circle',
              rotation: 0,
            };
          });
        },
      },
    },
    title: {
      display: true,
      font: {
        size: 15, // 제목 글자 크기 조정
      },
      padding: {
        top: 20, // 제목과 그래프 사이의 간격 설정
        bottom: 10, // 제목과 위쪽 콘텐츠 사이의 간격 설정
      },
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 10, // x축 레이블 글자 크기 조정
        },
      },
    },
    y: {
      min: 0,
      max: 18, // y축 최대값 설정, 필요에 따라 값 변경
      ticks: {
        font: {
          size: 10, // y축 레이블 글자 크기 조정
        },
      },
    },
  },
  elements: {
    point: {
      radius: 0.5, // 도트의 반지름 설정
    },
  },
};

// tagName을 한국어로 매핑 함수
const getKoreanLabel = (tagName) => {
  const labelMap = {
    'SLEEP_PROBLEM': '수면문제',
    'TEMPERATURE_CHANGE': '체온변화',
    'MOOD_CHANGE': '기분변화',
    'PHYSICAL_CHANGE': '신체변화',
    'WEIGHT_CHANGE': '체중변화',
    'PERIOD': '월경',
  };
  return labelMap[tagName] || tagName; // 일치 라벨 없으면 tagName 반환
};

function LineChart() {
  const graphList = getGraphHook();
  const [weekLabels, setWeekLabels] = useState([]); // 그래프 하단 주차 라벨
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    if (graphList.length > 0) {
      // 월, 주차 추출 및 데이터 구조화
      const weeks = graphList.map(graph => ({
        weekOfMonth: graph.weekOfMonth,
        month: graph.month,
        list: graph.reportList
      }));

      // weekLabels(주차) 배열 표현형식
      const updatedWeekLabels = weeks.map(week => `${week.month}월 ${week.weekOfMonth}주차`);
      const limitedWeekLabels = updatedWeekLabels.slice(-5); // 최신 5개 유지
      setWeekLabels(limitedWeekLabels);

      // tagName 추출, 중복제거
      const tagNames = [...new Set(weeks.flatMap(week => week.list.map(report => report.tagName)))];
      console.log("tagNames = ", tagNames);

      // tagName에 따른 score값
      const datasets = tagNames.map(tagName => {
        const data = weeks.map(week => {
          const report = week.list.find(r => r.tagName === tagName);
          return report ? report.score : 0; // score 값이 없으면 0으로 처리
        }).slice(-5); // 최신 5개 데이터만 유지

        return {
          label: tagName, // 한국어 라벨로 변환
          data: data, // score값
          borderColor: getColor(tagName),
          backgroundColor: getColor(tagName),
          borderWidth: 2,
        };
      });

      setChartData({
        labels: limitedWeekLabels,
        datasets: datasets
      });
    }
  }, [graphList]);

  // tagName에 따른 색상 설정 함수
  const getColor = (tagName) => {
    const colorMap = {
      'SLEEP_PROBLEM': '#9180FF',
      'TEMPERATURE_CHANGE': '#EA6363',
      'MOOD_CHANGE': '#57A4FE',
      'PHYSICAL_CHANGE': '#8ED51E',
      'WEIGHT_CHANGE': '#FFD260',
      'PERIOD': '#000000'
    };
    return colorMap[tagName] || '#000000'; // 기본 색상
  };

  console.log("graphList = ", graphList);
  console.log("weekLabels = ", weekLabels);
  console.log("chartData = ", chartData);

  return (
    <GraphContainer>
      <ContentInner>
        <Line options={options} data={chartData} height={500} width={800} />
      </ContentInner>
    </GraphContainer>
  );
}

export default LineChart;

const GraphContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentInner = styled.div`
  width: 100%;
  height: 100%;
`;
