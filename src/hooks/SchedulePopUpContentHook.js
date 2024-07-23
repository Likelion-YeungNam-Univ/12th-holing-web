import { useState } from 'react';

const SchedulePopUpContentHook = (
  getScheduleTitle,
  getScheduleContent,
  onClose
) => {
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

  // 저장 버튼 클릭 시 호출되는 핸들러
  const handleSave = () => {
    getScheduleTitle(title);
    getScheduleContent(content);
    onClose();
  };
  return { title, content, handleContentChange, handleTitleChange, handleSave };
};

export default SchedulePopUpContentHook;
