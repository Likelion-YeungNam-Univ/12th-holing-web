import React, { useRef, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import MySchedule from './MySchedule';
import DatePopUp from './DatePopUp';
import { CalendarWrapper } from '../style/Calendar-styled';

const MyFullCalendar = () => {
  const calendarRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    return today.toISOString().split('T')[0];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const calendar = calendarRef.current.getApi();

    const handleDateClick = (info) => {
      setSelectedDate(info.dateStr);
    };

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

  return (
    <CalendarWrapper>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
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
