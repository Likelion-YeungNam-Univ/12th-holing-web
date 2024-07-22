import React from 'react';
import DatePopUpContentHook from 'hooks/DatePopUpContentHook';
import {
  DateWrapper,
  DateColumn,
  DateBox,
  PreviousDate,
  NextDate,
} from 'style/DatePopUp-styled';

const DatePopUpContent = ({ onClose, getSelectedDate }) => {
  const {
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
  } = DatePopUpContentHook();

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
      <button onClick={() => handleComplete(onClose, getSelectedDate)}>완료</button>
    </>
  );
};

export default DatePopUpContent;
