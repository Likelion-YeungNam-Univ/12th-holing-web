import { useRef, useState, useEffect } from 'react';
import moment from 'moment';

export const MyFullCalendarHook = () => {
  const calendarRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    today.toISOString().split('T')[0];
    const formattedDate = moment(today).format('YYYY년 M월 D일');
    return formattedDate;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState('dayGridWeek');

  useEffect(() => {
    const calendar = calendarRef.current.getApi();

    const handleDateClick = (info) => {
      const clickedDate = moment(info.dateStr).format('YYYY년 M월 D일');
      setSelectedDate(clickedDate);
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

  const toggleView = () => {
    const newView =
      currentView === 'dayGridMonth' ? 'dayGridWeek' : 'dayGridMonth';
    setCurrentView(newView);
    const calendar = calendarRef.current.getApi();
    calendar.changeView(newView);
  };

  return {
    calendarRef,
    selectedDate,
    isModalOpen,
    currentView,
    openModal,
    closeModal,
    getSelectedDate,
    toggleView,
  };
};
