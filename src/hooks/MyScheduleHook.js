//MySchdule Hook
import { useState } from 'react';

const MyScheduleHook = (selectedDate) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [scheduleTitle, setScheduleTitle] = useState('');

  const [scheduleContent, setScheduleContent] = useState({});

  //selectedDate와 ScheduleTitle 연동해서 저장
  const getScheduleContent = (content) => {
    setScheduleContent((prevContents) => {
      const updatedContents = { ...prevContents };

      if (!updatedContents[selectedDate]) {
        updatedContents[selectedDate] = [];
      }

      updatedContents[selectedDate].push(content);
      return updatedContents;
    });
  };

  //selectedDate와 ScheduleTitle 연동해서 저장
  const getScheduleTitle = (title) => {
    setScheduleTitle((prevTitles) => {
      const updatedTitles = { ...prevTitles };

      if (!updatedTitles[selectedDate]) {
        updatedTitles[selectedDate] = [];
      }

      updatedTitles[selectedDate].push(title);
      return updatedTitles;
    });
  };

  // Schedule Title, Schedule Content 합치기
  const schedules = (scheduleTitle[selectedDate] || []).map((title, index) => ({
    title,
    content: (scheduleContent[selectedDate] || [])[index] || '',
  }));

  return {
    isModalOpen,
    openModal,
    closeModal,
    scheduleTitle,
    scheduleContent,
    getScheduleContent,
    getScheduleTitle,
    schedules,
  };
};

export default MyScheduleHook;
