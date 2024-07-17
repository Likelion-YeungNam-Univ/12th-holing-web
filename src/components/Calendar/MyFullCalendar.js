import React, { useRef, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import MySchedule from './MySchedule';
import DatePopUp from './DatePopUp';
import {
  CalendarWrapper,
  CalendarToggleButton,
} from '../../style/Calendar-styled';

const MyFullCalendar = () => {
  const calendarRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    return today.toISOString().split('T')[0];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState('dayGridMonth');

  useEffect(() => {
    const calendar = calendarRef.current.getApi();

    const handleDateClick = (info) => {
      setSelectedDate(info.dateStr);
    };

    // on: 메서드, dateClick: 이벤트 이름
    calendar.on('dateClick', handleDateClick);

    return () => {
      calendar.off('dateClick', handleDateClick);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getSelectedDate = (x) => {
    setSelectedDate(x);
  };

  const toggleView = () => {
    const newView =
      currentView === 'dayGridMonth' ? 'dayGridWeek' : 'dayGridMonth';
    setCurrentView(newView);
    const calendar = calendarRef.current.getApi();
    calendar.changeView(newView);
  };

  return (
    <CalendarWrapper>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={currentView}
        headerToolbar={{
          start: 'prev,next today',
          center: 'title',
          end: 'myCustomButton', // 버튼 추가
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
