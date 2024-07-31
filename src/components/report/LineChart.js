// ----- 그래프 라이브러리 사용

import styled from 'styled-components';
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
        // Custom 레이블 생성
        generateLabels: function (chart) {
          return chart.data.datasets.map(function (dataset, datasetIndex) {
            return {
              text: dataset.label,
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
      max: 7, // y축 최대값 설정, 필요에 따라 값 변경
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


// TODO : 임의 data 제거
const labels = ['1주차', '2주차', '3주차', '4주차']; // x축 기준

export const data = {
  labels,
  datasets: [
    {
      label: '수면문제',
      data: [1, 2, 3, 4],
      borderColor: '#9180FF',
      backgroundColor: '#9180FF',
      borderWidth: 2, // 선의 굵기 설정
    },
    {
      label: '체온변화',
      data: [2, 6, 4, 1],
      borderColor: '#EA6363',
      backgroundColor: '#EA6363',
      borderWidth: 2,
    },
    {
      label: '기분변화',
      data: [4, 4, 1, 1],
      borderColor: '#57A4FE',
      backgroundColor: '#57A4FE',
      borderWidth: 2,
    },
    {
      label: '신체변화',
      data: [1, 3, 1, 2],
      borderColor: '#8ED51E',
      backgroundColor: '#8ED51E',
      borderWidth: 2,
    },
    {
      label: '체중변화',
      data: [1, 3, 1, 2],
      borderColor: '#FFD260',
      backgroundColor: '#FFD260',
      borderWidth: 2,
    },
  ],
};








export default function LineChart() {
  const graphList = getGraphHook();
  console.log("graphList = ", graphList);

  return (
    <GraphContainer>
      <ContentInner>
        <Line options={options} data={data} height={500} width={800} />
      </ContentInner>
    </GraphContainer>
  );
}

const GraphContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const ContentInner = styled.div`
  width: 100%;
  height: 100%;
`;
