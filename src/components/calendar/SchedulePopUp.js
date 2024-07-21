import React from 'react';
import Modal from 'react-modal';
import SchedulePopUpContent from './SchedulePopUpContent';

const customModalStyles = {
  overlay: {
    position: 'fixed',
    zIndex: 1000,
  },
  content: {
    width: '380px',
    height: '529px',
    margin: 'auto',
    zIndex: 1001,
    paddingTop: '62px',
    paddingLeft: '36px',
  },
};

const SchedulePopUp = ({ isOpen, onClose, getScheduleTitle, getScheduleContent }) => {
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customModalStyles}
      ariaHideApp={false} // 백그라운드 조작 방지
    >
      <SchedulePopUpContent onClose={onClose} getScheduleTitle={getScheduleTitle} getScheduleContent={getScheduleContent}/>
    </Modal>
  );
};

export default SchedulePopUp;
