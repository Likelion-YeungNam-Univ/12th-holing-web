import { useState } from 'react';
import {
  getYear,
  getMonth,
  getDate,
  addYears,
  addMonths,
  addDays,
  subYears,
  subMonths,
  subDays,
  format,
} from 'date-fns';

const DatePopUpContentHook = () => {
  const [date, setDate] = useState(new Date());

  // 마우스 휠 이벤트로 날짜 변경 처리 함수
  const handleWheel = (event, unit) => {
    event.preventDefault();
    let newDate;

    // 휠 방향에 따라 날짜를 증가시키거나 감소시킴
    if (unit === 'year') {
      newDate = addYears(date, event.deltaY < 0 ? 1 : -1);
    } else if (unit === 'month') {
      newDate = addMonths(date, event.deltaY < 0 ? 1 : -1);
    } else if (unit === 'day') {
      newDate = addDays(date, event.deltaY < 0 ? 1 : -1);
    }
    setDate(newDate);
  };

  // 날짜 선택 완료 시 처리 함수
  const handleComplete = (onClose, getSelectedDate) => {
    // 팝업창에서 선택된 year, month, day
    const year = getYear(date);
    const month = String(getMonth(date) + 1).padStart(2, '0');
    const day = String(getDate(date)).padStart(2, '0');
    // UI 렌더링 포맷 YYYY년 MM월 DD일
    const formattedDate = `${year}년 ${month}월 ${day}일`;

    onClose();
    getSelectedDate(formattedDate);
  };

  // 현재 날짜에서 연도, 월, 일을 추출
  const year = getYear(date);
  const month = format(date, 'M월');
  const day = getDate(date);

  // 이전/다음 연도, 월, 일 계산
  const previousYear = getYear(subYears(date, 1));
  const nextYear = getYear(addYears(date, 1));
  const previousMonth = format(subMonths(date, 1), 'M월');
  const nextMonth = format(addMonths(date, 1), 'M월');
  const previousDay = getDate(subDays(date, 1));
  const nextDay = getDate(addDays(date, 1));

  return {
    date,
    setDate,
    handleWheel,
    handleComplete,
    year,
    month,
    day,
    previousYear,
    nextYear,
    previousMonth,
    nextMonth,
    previousDay,
    nextDay,
  };
};

export default DatePopUpContentHook;
