import React from 'react';
import moment from 'moment';
import {
  SchedulePopUpContentWrapper,
  ScheduleTitle,
  ScheduleBody,
  SchedulePopUpSaveBtn,
  SchedulePopUpCancelBtn,
} from 'styles/calendar/SchedulePopUp-styled';
import SchedulePopUpContentHook from 'hooks/calendar/SchedulePopUpContentHook';
import { postSchedule } from 'apis/schedule/schedulePost';

const SchedulePopUpContent = ({
  onClose,
  selectedDate,
  onAddSchedule,
  updateScheduleDates,
}) => {
  const { title, content, handleTitleChange, handleContentChange } =
    SchedulePopUpContentHook(onClose);

  const handleSave = () => {
    // 선택한 날짜를 API가 요구하는 형식으로 변환
    const date = moment(selectedDate, 'YYYY년 M월 D일').format('YYYY-MM-DD');
    const isoDate = `${date}T15:00:00.000Z`;

    // API에 보낼 데이터 객체 생성
    const scheduleData = {
      title: title,
      content: content,
      startAt: isoDate,
      finishAt: isoDate,
    };

    // postSchedule 함수를 호출하여 데이터를 API에 전송
    postSchedule(scheduleData)
      .then((response) => {
        console.log('Data posted successfully:', response.data);
        onAddSchedule(response.data);
        updateScheduleDates(date, 1);
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });

    onClose();
  };

  return (
    <SchedulePopUpContentWrapper>
      <ScheduleTitle
        placeholder="일정 제목"
        onChange={handleTitleChange}
      ></ScheduleTitle>
      <ScheduleBody
        placeholder="일정의 장소 및 시간을 메모하세요."
        onChange={handleContentChange}
      ></ScheduleBody>
      <SchedulePopUpSaveBtn onClick={handleSave}>저장하기</SchedulePopUpSaveBtn>
      <SchedulePopUpCancelBtn onClick={onClose}>
        취소하기
      </SchedulePopUpCancelBtn>
    </SchedulePopUpContentWrapper>
  );
};

export default SchedulePopUpContent;
