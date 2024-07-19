import { useRef, useState, useEffect } from 'react';

export const MyFullCalendarHook = () => {
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
