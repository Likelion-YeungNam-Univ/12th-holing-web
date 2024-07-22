import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import MySchedule from '../components/calendar/MySchedule';
import DatePopUp from '../components/calendar/DatePopUp';
import Mission from '../components/calendar/Mission';
import img_calendarToggleDownBtn from '../assets/images/calendar_toggle_down_btn.png';
import img_calendarToggleUpBtn from '../assets/images/calendar_toggle_up_btn.png';
import img_calendarPopUpBtn from '../assets/images/calendar_popup_btn.png';

import {
  CalendarWrapper,
  CalendarToggleButton,
} from '../styles/calendar/Calendar-styled';
import { MyFullCalendarHook } from '../hooks/MyFullCalendarHook';

const MyFullCalendar = () => {
  const {
    calendarRef,
    selectedDate,
    isModalOpen,
    currentView,
    openModal,
    closeModal,
    getSelectedDate,
    toggleView,
  } = MyFullCalendarHook();

  // Calendar의 date에서 일 제거
  const dayCellContent = (arg) => {
    return arg.date.getDate().toString();
  };

  return (
    <>
      <CalendarWrapper view={currentView}>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={currentView}
          headerToolbar={{
            left: 'prev title next',
            center: '',
            right: 'myCustomButton',
          }}
          customButtons={{
            myCustomButton: {
              click: openModal,
            },
          }}
          locale="ko"
          dayCellContent={dayCellContent}
          dayHeaderFormat={{ weekday: 'short' }}
          titleFormat={{ year: 'numeric', month: 'short' }}
          height={
            currentView === 'dayGridWeek'
              ? 263
              : currentView === 'dayGridMonth'
                ? 600
                : 'auto'
          }
        />
        <style>
          {`
            .fc-myCustomButton-button {
              background: url(${img_calendarPopUpBtn}) no-repeat center center;
              background-size: contain;
              border: none;
              width: 33px; /* 적절한 너비로 설정 */
              height: 33px; /* 적절한 높이로 설정 */
            }
          `}
        </style>
      </CalendarWrapper>
      <CalendarToggleButton
        src={
          currentView === 'dayGridWeek'
            ? img_calendarToggleDownBtn
            : img_calendarToggleUpBtn
        }
        alt="Calendar Toggle Button"
        onClick={toggleView}
      />
      <MySchedule selectedDate={selectedDate} />
      <Mission />
      <DatePopUp
        isOpen={isModalOpen}
        onClose={closeModal}
        getSelectedDate={getSelectedDate}
      ></DatePopUp>
    </>
  );
};

export default MyFullCalendar;
