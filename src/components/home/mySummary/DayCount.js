import React, { useState, useEffect } from 'react';
import { Count } from 'styles/home/Count-styled';

function DayCount() {
  // 현재 날짜를 자정으로 설정하여 초기 날짜로 지정
  const initialDate = new Date();
  initialDate.setHours(0, 0, 0, 0);

  // 프로그램 시작 날짜를 상태로 설정
  const [programStartDate] = useState(initialDate);

  // 현재 날짜를 상태로 설정
  const [currentDate, setCurrentDate] = useState(new Date());

  // 시작 날짜와 종료 날짜 사이의 경과 일수를 계산하는 함수
  const calculateDaysElapsed = (startDate, endDate) => {
    const timeDiff = endDate - startDate; // 두 날짜 간의 시간 차이
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 일수로 변환하여 반올림
  };

  // 초기 경과 일수를 상태로 설정
  const [daysElapsed, setDaysElapsed] = useState(
    calculateDaysElapsed(programStartDate, currentDate)
  );

  useEffect(() => {
    // 매일 자정에 현재 날짜와 경과 일수를 업데이트하는 interval 설정
    const interval = setInterval(
      () => {
        const newDate = new Date(); // 새로운 현재 날짜 생성
        setCurrentDate(newDate); // 현재 날짜 상태 업데이트
        setDaysElapsed(calculateDaysElapsed(programStartDate, newDate)); // 경과 일수 상태 업데이트
      },
      24 * 60 * 60 * 1000
    ); // 24시간(하루) 간격으로 실행

    // 컴포넌트 언마운트 시 interval 클리어
    return () => clearInterval(interval);
  }, [programStartDate]);

  // 경과 일수를 3자리 문자열로 포맷 (예: 1일 -> 001일)
  const formattedDaysElapsed = daysElapsed.toString().padStart(3, '0');

  return (
    <div className="DayCount">
      <header className="count">
        <Count>D+{formattedDaysElapsed}</Count> {/* D+경과 일수 표시 */}
      </header>
    </div>
  );
}

export default DayCount;
