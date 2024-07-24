import React, { useState, useEffect } from 'react';
import {
  ModalOverlay,
  ModalContent,
  StyledInput,
  DialWrapper,
  Dial,
  DialAmPm,
  Colon,
  DialValue,
  Button,
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

const Modal = ({ isOpen, onClose, onAddMedicine }) => {
  const [newMedicine, setNewMedicine] = useState('');
  const [ampm, setAmPm] = useState('오전');
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setNewMedicine(e.target.value);
  };

  const handleAdd = () => {
    if (newMedicine.trim() !== '') {
      const time = new Date();
      let adjustedHour = hour;

      if (ampm === '오후' && hour !== 12) {
        adjustedHour += 12;
      } else if (ampm === '오전' && hour === 12) {
        adjustedHour = 0;
      }

      time.setHours(adjustedHour);
      time.setMinutes(minute);
      onAddMedicine(newMedicine, time);

      setNewMedicine('');
      setAmPm('오전');
      setHour(12);
      setMinute(0);

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
    switch (unit) {
      case 'ampm':
        setAmPm((prev) => (prev === '오전' ? '오후' : '오전'));
        break;
      case 'hour':
        setHour((prev) => {
          let newHour = (prev + delta + 12) % 12;
          if (newHour === 0) newHour = 12;
          if ((prev === 11 && delta > 0) || (prev === 12 && delta < 0)) {
            setAmPm((prevAmPm) => (prevAmPm === '오전' ? '오후' : '오전'));
          }
          return newHour;
        });
        break;
      case 'minute':
        setMinute((prev) => (prev + delta * 5 + 60) % 60);
        break;
      default:
        break;
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
              <DialAmPm>
                {['오전', '오후'].map((value) => (
                  <DialValue
                    key={value}
                    onWheel={(e) => {
                      e.preventDefault();
                      handleWheel('ampm', e.deltaY < 0 ? 1 : -1);
                    }}
                    style={{
                      color: value === ampm ? 'black' : '#DDD',
                    }}
                  >
                    {value}
                  </DialValue>
                ))}
              </DialAmPm>
              <Dial>
                {getSurroundingValues(hour, 12, 1).map((value, index) => (
                  <DialValue
                    key={index}
                    onWheel={(e) => {
                      e.preventDefault();
                      handleWheel('hour', e.deltaY < 0 ? 1 : -1);
                    }}
                    style={{
                      color: value === hour ? 'black' : '#DDD',
                    }}
                  >
                    {formatTimeValue(value)}
                  </DialValue>
                ))}
              </Dial>
              <Colon>:</Colon>
              <Dial>
                {getSurroundingValues(minute, 60, 5).map((value, index) => (
                  <DialValue
                    key={index}
                    onWheel={(e) => {
                      e.preventDefault();
                      handleWheel('minute', e.deltaY < 0 ? 1 : -1);
                    }}
                    style={{
                      color: value === minute ? 'black' : '#DDD',
                    }}
                  >
                    {formatTimeValue(value)}
                  </DialValue>
                ))}
              </Dial>
            </DialWrapper>
            <Button>
              <SaveBtn onClick={handleAdd}>저장하기</SaveBtn>
              <CancelBtn onClick={handleClose}>취소하기</CancelBtn>
            </Button>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Modal;
