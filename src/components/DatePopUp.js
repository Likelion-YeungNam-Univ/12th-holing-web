import React from 'react';
import Modal from 'react-modal';
import DatePopUpContent from './DatePopUpContent';

const DatePopUp = ({ isOpen, onClose, getSelectedDate }) => {
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      getSelectedDate={getSelectedDate}
    >
      <DatePopUpContent
        onClose={onClose}
        getSelectedDate={getSelectedDate}
      />
    </Modal>
  );
};

export default DatePopUp;
