import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import MySchedule from '../components/calendar/MySchedule';
import DatePopUp from '../components/calendar/DatePopUp'

import {
  CalendarWrapper,
  CalendarToggleButton,
} from '../style/Calendar-styled';
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

  return (
    <CalendarWrapper>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={currentView}
        headerToolbar={{
          start: 'prev,next today',
          center: 'title',
          end: 'myCustomButton',
        }}
        customButtons={{
          myCustomButton: {
            text: 'Button',
            click: openModal,
          },
        }}
      />
      <CalendarToggleButton onClick={toggleView}>
        Calendar Toggle Button
      </CalendarToggleButton>
      <MySchedule selectedDate={selectedDate} />
      <DatePopUp
        isOpen={isModalOpen}
        onClose={closeModal}
        getSelectedDate={getSelectedDate}
      ></DatePopUp>
    </CalendarWrapper>
  );
};

export default MyFullCalendar;
