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

  const handleComplete = (onClose, getSelectedDate) => {
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
