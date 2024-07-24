import React, { useState, useEffect } from 'react';
import {
  ModalOverlay,
  ModalContent,
  StyledInput,
  DialWrapper,
  Dial,
  DialValue,
  DialLabel,
  SaveBtn,
  CancelBtn,
  Divider,
} from 'styles/home/Modal-styled';

// Helper function to format time values
const formatTimeValue = (value) => (value < 10 ? `0${value}` : value);

// Helper function to get previous and next values
const getSurroundingValues = (value, max, step = 1) => {
  const prev = (value - step + max) % max;
  const next = (value + step) % max;
  return [prev, value, next];
};

// Modal Component
const Modal = ({ isOpen, onClose, onAddMedicine }) => {
  const [newMedicine, setNewMedicine] = useState('');
  const [ampm, setAmPm] = useState('오전');
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);

  // Disable scroll on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setNewMedicine(e.target.value);
  };

  const handleAdd = () => {
    if (newMedicine.trim() !== '') {
      const time = new Date();
      let adjustedHour = hour;

      // Adjust hour based on AM/PM
      if (ampm === '오후' && hour !== 12) {
        adjustedHour += 12;
      } else if (ampm === '오전' && hour === 12) {
        adjustedHour = 0;
      }

      time.setHours(adjustedHour);
      time.setMinutes(minute);
      onAddMedicine(newMedicine, time);

      // Reset states after adding
      setNewMedicine('');
      setAmPm('오전');
      setHour(12);
      setMinute(0);

      // Close the modal
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
    setNewMedicine('');
    setAmPm('오전');
    setHour(12);
    setMinute(0);
  };

  const handleWheel = (unit, delta) => {
    if (unit === 'ampm') {
      setAmPm((prev) => (prev === '오전' ? '오후' : '오전'));
    } else if (unit === 'hour') {
      setHour((prev) => {
        let newHour = (prev + delta + 24) % 24;
        if (newHour === 0) newHour = 12;
        return newHour;
      });
    } else if (unit === 'minute') {
      setMinute((prev) => (prev + delta + 60) % 60);
    }
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={handleClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <StyledInput
              type="text"
              value={newMedicine}
              onChange={handleChange}
              placeholder="먹어야 하는 영양제 이름"
            />
            <Divider />
            <DialWrapper>
              <Dial>
                <DialLabel>AM/PM</DialLabel>
                {getSurroundingValues(ampm === '오전' ? 0 : 1, 2).map(
                  (value, index) => (
                    <DialValue
                      key={index}
                      onWheel={(e) => {
                        e.preventDefault();
                        handleWheel('ampm');
                      }}
                    >
                      {value === 0 ? '오전' : '오후'}
                    </DialValue>
                  )
                )}
              </Dial>
              <Dial>
                <DialLabel>Hour</DialLabel>
                {getSurroundingValues(hour, 24, 1).map((value, index) => (
                  <DialValue
                    key={index}
                    onWheel={(e) => {
                      e.preventDefault();
                      handleWheel('hour', e.deltaY < 0 ? 1 : -1);
                    }}
                  >
                    {formatTimeValue(value)}
                  </DialValue>
                ))}
                <DialLabel>0-23</DialLabel>
              </Dial>
              :
              <Dial>
                <DialLabel>Minute</DialLabel>
                {getSurroundingValues(minute, 60, 1).map((value, index) => (
                  <DialValue
                    key={index}
                    onWheel={(e) => {
                      e.preventDefault();
                      handleWheel('minute', e.deltaY < 0 ? 15 : -15);
                    }}
                  >
                    {formatTimeValue(value)}
                  </DialValue>
                ))}
                <DialLabel>00-59</DialLabel>
              </Dial>
            </DialWrapper>
            <div>
              <SaveBtn onClick={handleAdd}>저장하기</SaveBtn>
              <CancelBtn onClick={handleClose}>취소하기</CancelBtn>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Modal;
