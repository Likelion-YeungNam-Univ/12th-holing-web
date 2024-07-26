import { useState } from 'react';

const SchedulePopUpContentHook = (onClose) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 제목 입력 변화 핸들러
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // 내용 입력 변화 핸들러
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return { title, content, handleContentChange, handleTitleChange };
};

export default SchedulePopUpContentHook;
