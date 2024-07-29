import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import MySchedule from 'components/calendar/MySchedule';
import DatePopUp from 'components/calendar/DatePopUp';
import Mission from 'components/calendar/Mission';
import img_calendarToggleDownBtn from 'assets/images/calendar_toggle_down_btn.png';
import img_calendarToggleUpBtn from 'assets/images/calendar_toggle_up_btn.png';
import img_calendarPopUpBtn from 'assets/images/calendar_popup_btn.png';
import { useEffect, useState } from 'react';
import moment from 'moment';
import {
  CalendarWrapper,
  CalendarToggleButton,
} from 'styles/calendar/Calendar-styled';
import { MyFullCalendarHook } from 'hooks/calendar/MyFullCalendarHook';
import { fetchScheduleCounts } from 'apis/schedule/scheduleCount';

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

  const [scheduleDates, setScheduleDates] = useState([]);

  useEffect(() => {
    // 일정 개수 조회 포맷 YYYY-MM-DD
    const isoDate = moment(selectedDate, 'YYYY년 M월 D일').format('YYYY-MM-DD');

    // API 호출을 통해 일정 개수 가져오기
    fetchScheduleCounts(isoDate)
      .then((response) => {
        console.log('Schedules for the selected month:', response.data);
        // 날짜별 일정 개수를 객체 형태로 변환
        const datesWithSchedules = response.data.reduce((acc, entry) => {
          acc[entry.date] = entry.count;
          return acc;
        }, {});
        console.log('DateWithSchedules:', datesWithSchedules);
        setScheduleDates(datesWithSchedules);
      })
      .catch((error) => {
        console.error('Error fetching schedules:', error);
      });

    // selectedDate 바뀔 때마다 재렌더링
  }, [selectedDate]);

  // 일정 날짜 업데이트 함수
  const updateScheduleDates = (date, countChange) => {
    setScheduleDates((prev) => {
      const newScheduleDates = { ...prev };
      newScheduleDates[date] = (newScheduleDates[date] || 0) + countChange;
      if (newScheduleDates[date] <= 0) delete newScheduleDates[date];
      return newScheduleDates;
    });
  };

  // Full Calendar의 dayCellContent에 일정 개수 표시
  const dayCellContent = (arg) => {
    const cellDate = moment(arg.date).format('YYYY-MM-DD');
    const scheduleCount = scheduleDates[cellDate] || 0;
    const dotCount = Math.min(scheduleCount, 2); // 최대 2개의 점만 표시

    return (
      <div style={{ position: 'relative' }}>
        {arg.date.getDate()}
        {dotCount > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '34px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {Array.from({ length: dotCount }).map((_, index) => (
              <div
                key={index}
                style={{
                  width: '9px',
                  height: '9px',
                  backgroundColor: '#5643D1',
                  borderRadius: '50%',
                  marginLeft: index === 0 ? '0' : '5px', // 점 간격 조정
                }}
              />
            ))}
          </div>
        )}
      </div>
    );
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
              ? 228
              : currentView === 'dayGridMonth'
                ? 570
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
      <MySchedule
        selectedDate={selectedDate}
        updateScheduleDates={updateScheduleDates}
      />
      <Mission selectedDate={selectedDate} />
      <DatePopUp
        isOpen={isModalOpen}
        onClose={closeModal}
        getSelectedDate={getSelectedDate}
      ></DatePopUp>
    </>
  );
};

export default MyFullCalendar;
