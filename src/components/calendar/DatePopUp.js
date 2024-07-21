//DatePopUp.js
import React from 'react';
import Modal from 'react-modal';
import DatePopUpContent from './DatePopUpContent';

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
    paddingTop: '113px',
    paddingLeft: '30px',
    paddingRignt: '30px', 
  },
};

const DatePopUp = ({ isOpen, onClose, getSelectedDate }) => {
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      getSelectedDate={getSelectedDate}
      style={customModalStyles}
      ariaHideApp={false} // 백그라운드 조작 방지
    >
      <DatePopUpContent onClose={onClose} getSelectedDate={getSelectedDate} />
    </Modal>
  );
};

export default DatePopUp;
