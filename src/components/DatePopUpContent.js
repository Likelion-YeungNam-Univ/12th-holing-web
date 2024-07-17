import React, { useState } from 'react';
import {
  getYear,
  getMonth,
  getDate,
  addYears,
  addMonths,
  addDays,
  format,
  subYears,
  subMonths,
  subDays,
} from 'date-fns';

import {
  DateWrapper,
  DateColumn,
  DateBox,
  PreviousDate,
  NextDate,
} from '../style/DatePopUp-styled';

const DatePopUpContent = ({ onClose, getSelectedDate }) => {
  const [date, setDate] = useState(new Date());

  const handleWheel = (event, unit) => {
    event.preventDefault();
    let newDate;
    if (unit === 'year') {
      newDate = addYears(date, event.deltaY < 0 ? 1 : -1);
    } else if (unit === 'month') {
      newDate = addMonths(date, event.deltaY < 0 ? 1 : -1);
    } else if (unit === 'day') {
      newDate = addDays(date, event.deltaY < 0 ? 1 : -1);
    }
    setDate(newDate);
  };

  const handleComplete = () => {
    const year = getYear(date);
    const month = getMonth(date) + 1; // getMonth는 0부터 시작하므로 +1 해줘야 함
    const day = getDate(date);
    const formattedDate = `${year}-${month}-${day}`;
    onClose();

    getSelectedDate(formattedDate);
  };

  const year = getYear(date);
  const month = format(date, 'M월');
  const day = getDate(date);

  const previousYear = getYear(subYears(date, 1));
  const nextYear = getYear(addYears(date, 1));
  const previousMonth = format(subMonths(date, 1), 'M월');
  const nextMonth = format(addMonths(date, 1), 'M월');
  const previousDay = getDate(subDays(date, 1));
  const nextDay = getDate(addDays(date, 1));

  return (
    <>
      <DateWrapper>
        <DateColumn>
          <PreviousDate>{previousYear}</PreviousDate>
          <DateBox onWheel={(event) => handleWheel(event, 'year')}>
            {year}
          </DateBox>
          <NextDate>{nextYear}</NextDate>
        </DateColumn>
        <DateColumn>
          <PreviousDate>{previousMonth}</PreviousDate>
          <DateBox onWheel={(event) => handleWheel(event, 'month')}>
            {month}
          </DateBox>
          <NextDate>{nextMonth}</NextDate>
        </DateColumn>
        <DateColumn>
          <PreviousDate>{previousDay}일</PreviousDate>
          <DateBox onWheel={(event) => handleWheel(event, 'day')}>
            {day}일
          </DateBox>
          <NextDate>{nextDay}일</NextDate>
        </DateColumn>
      </DateWrapper>
      <button onClick={onClose}>취소</button>
      <button onClick={handleComplete}>완료</button>
    </>
  );
};

export default DatePopUpContent;
