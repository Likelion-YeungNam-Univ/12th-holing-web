import { useState } from 'react';

const SchedulePopUpContentHook = (
  getScheduleTitle,
  getScheduleContent,
  onClose
) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSave = () => {
    getScheduleTitle(title);
    getScheduleContent(content);
    onClose();
  };
  return { title, content, handleContentChange, handleTitleChange, handleSave };
};

export default SchedulePopUpContentHook;
