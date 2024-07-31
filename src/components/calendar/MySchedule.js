import React from 'react';
import { useEffect, useState } from 'react';
import moment from 'moment';
import {
  ScheduleBox,
  AddScheduleButton,
  ScheduleDate,
  Highlight,
  CheckComment,
  ScheduleTitle,
  ScheduleContent,
  DeleteBtn,
  DeleteBtnImg,
  BulletPoint,
  ScheduleRow,
  ScheduleItem,
  ScheduleCheckImg,
  ScheduleComment,
  ScheduleImg,
} from 'styles/calendar/Schedule-styled';
import MyScheduleHook from 'hooks/calendar/MyScheduleHook';
import SchedulePopUp from './SchedulePopUp';
import img_scheduleBulletPoint from 'assets/images/schedule_bullet_point.svg';
import img_scheduleCheck from 'assets/images/schedule_check_img.svg';
import img_scheduleDeleteBtn from 'assets/images/schedule_delete_btn.svg';
import img_schedule from 'assets/images/schedule_img.svg';
import { getSchedules } from 'apis/schedule/scheduleGet';
import { deleteSchedule } from 'apis/schedule/scheduleDelete';

const MySchedule = ({ selectedDate, updateScheduleDates }) => {
  const { isModalOpen, openModal, closeModal } = MyScheduleHook();
  const [schedules, setSchedules] = useState([]);

  // selectedDate가 변경될 때마다 일정을 가져옴
  useEffect(() => {
    fetchSchedules();
  }, [selectedDate]);

  // 선택된 날짜에 대한 일정을 가져오는 함수
  const fetchSchedules = () => {
    const isoDate = moment(selectedDate, 'YYYY년 M월 D일').format('YYYY-MM-DD');

    console.log('isoDate:', isoDate);

    getSchedules(isoDate)
      .then((response) => {
        console.log('Schedules for the selected date:', response.data);
        setSchedules(response.data);
      })
      .catch((error) => {
        console.error('Error fetching schedules:', error);
        setSchedules([]);
      });
  };

  // 일정 삭제 핸들러
  const handleDelete = (scheduleId) => {
    const isoDate = moment(selectedDate, 'YYYY년 M월 D일').format('YYYY-MM-DD');
    deleteSchedule(scheduleId)
      .then(() => {
        // 성공적으로 삭제된 경우, 스케줄 목록 업데이트
        setSchedules(
          schedules.filter((schedule) => schedule.id !== scheduleId)
        );
        updateScheduleDates(isoDate, -1); // 일정 개수 업데이트
      })
      .catch((error) => {
        console.error('Error deleting schedule:', error);
      });
  };

  // 새 일정 추가 핸들러
  const handleAddSchedule = (newSchedule) => {
    setSchedules([...schedules, newSchedule]);
  };

  return (
    <ScheduleBox>
      <ScheduleDate>{selectedDate}</ScheduleDate>
      <ScheduleComment>
        <ScheduleCheckImg src={img_scheduleCheck}></ScheduleCheckImg>
        <Highlight>일정</Highlight>
        <CheckComment>을 확인해보세요</CheckComment>
      </ScheduleComment>
      {schedules.length > 0 ? (
        schedules.map((schedule, index) => (
          <ScheduleItem key={index}>
            <ScheduleRow>
              <BulletPoint src={img_scheduleBulletPoint}></BulletPoint>
              <ScheduleTitle>{schedule.title}</ScheduleTitle>
              <DeleteBtn onClick={() => handleDelete(schedule.id)}>
                삭제하기
              </DeleteBtn>
              <DeleteBtnImg src={img_scheduleDeleteBtn}></DeleteBtnImg>
            </ScheduleRow>
            <ScheduleContent>{schedule.content}</ScheduleContent>
          </ScheduleItem>
        ))
      ) : (
        <ScheduleImg src={img_schedule} alt="No schedules available" />
      )}
      <AddScheduleButton onClick={openModal}>+ 일정 추가하기</AddScheduleButton>
      {isModalOpen && (
        <SchedulePopUp
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedDate={selectedDate}
          onAddSchedule={handleAddSchedule}
          updateScheduleDates={updateScheduleDates}
        />
      )}
    </ScheduleBox>
  );
};

export default MySchedule;
