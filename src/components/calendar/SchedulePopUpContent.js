import React from 'react';
import {
  SchedulePopUpContentWrapper,
  ScheduleTitle,
  ScheduleBody,
  SchedulePopUpSaveBtn,
  SchedulePopUpCancelBtn,
} from '../../style/SchedulePopUp-styled';
import { useState } from 'react';
import SchedulePopUpContentHook from '../../hooks/SchedulePopUpContentHook';

const SchedulePopUpContent = ({
  onClose,
  getScheduleTitle,
  getScheduleContent,
}) => {
  const { title, content, handleTitleChange, handleContentChange, handleSave } =
    SchedulePopUpContentHook(getScheduleTitle, getScheduleContent, onClose);
  return (
    <SchedulePopUpContentWrapper>
      <ScheduleTitle
        placeholder="일정 제목"
        onChange={handleTitleChange}
      ></ScheduleTitle>
      <ScheduleBody
        placeholder="일정의 장소 및 시간을 메모하세요"
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
