import { useRef, useState, useEffect } from 'react';
import moment from 'moment';

export const MyFullCalendarHook = () => {
  // 캘린더 컴포넌트를 참조하기 위한 useRef 훅
  const calendarRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    today.toISOString().split('T')[0];
    const formattedDate = moment(today).format('YYYY년 M월 D일');
    return formattedDate;
  });

  // 모달 열림/닫힘 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 현재 캘린더 뷰 상태 ('dayGridWeek' 또는 'dayGridMonth')
  const [currentView, setCurrentView] = useState('dayGridWeek');

  // 컴포넌트 마운트 시 캘린더 인스턴스를 가져오고 이벤트 핸들러 등록
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

  // 모달 열기 함수
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 선택된 날짜 업데이트 함수
  const getSelectedDate = (x) => {
    setSelectedDate(x);
  };

  // 뷰 전환 함수 ('dayGridMonth' <-> 'dayGridWeek')
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
