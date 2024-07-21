import React from 'react';
import {
  ScheduleBox,
  ScheduleList,
  ScheduleItem,
  AddScheduleButton,
  ScheduleDate,
  Highlight,
  CheckComment,
  ScheduleTitle,
  ScheduleContent,
} from '../../style/Schedule-styled';
import MyScheduleHook from '../../hooks/MyScheduleHook';
import SchedulePopUp from './SchedulePopUp';

const MySchedule = ({ selectedDate }) => {
  const {
    isModalOpen,
    openModal,
    closeModal,
    scheduleTitle,
    scheduleContent,
    getScheduleContent,
    getScheduleTitle,
    schedules,
  } = MyScheduleHook(selectedDate);

  return (
    <ScheduleBox>
      <ScheduleDate>{selectedDate}</ScheduleDate>
      <div>
        <Highlight>일정</Highlight>
        <CheckComment>을 확인해보세요</CheckComment>
      </div>
      {schedules.map((schedule, index) => (
        <div key={index}>
          <ScheduleTitle>{schedule.title}</ScheduleTitle>
          <ScheduleContent>{schedule.content}</ScheduleContent>
        </div>
      ))}
      <AddScheduleButton onClick={openModal}>+ 일정 추가하기</AddScheduleButton>
      {isModalOpen && (
        <SchedulePopUp
          isOpen={isModalOpen}
          onClose={closeModal}
          getScheduleTitle={getScheduleTitle}
          getScheduleContent={getScheduleContent}
        />
      )}
    </ScheduleBox>
  );
};

export default MySchedule;
