import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 13px;
  width: 380px;
  height: 320px; /* 높이를 늘려서 시간 입력 필드를 추가할 공간 확보 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;

  ::placeholder {
    color: #dddddd;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
  }
`;

const StyledButton = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const DatePickerWrapper = styled.div`
  margin-bottom: 20px; /* 시간 입력 필드와 다른 요소 사이의 간격 조정 */
`;

const DateBox = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

// Modal Component
const Modal = ({ isOpen, onClose, onAddMedicine }) => {
  const [newMedicine, setNewMedicine] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);

  const handleChange = (e) => {
    setNewMedicine(e.target.value);
  };

  const handleAdd = () => {
    if (newMedicine.trim() !== '' && selectedTime) {
      onAddMedicine(newMedicine, selectedTime);
      setNewMedicine('');
      setSelectedTime(null); // 입력 필드 초기화
    }
  };

  const handleClose = () => {
    onClose();
    setNewMedicine('');
    setSelectedTime(null); // 입력 필드 초기화
  };

  const handleWheel = (event, unit) => {
    event.preventDefault();
    let newDate = selectedTime;

    if (!newDate) return; // 날짜가 선택되지 않았으면 아무 작업도 하지 않음

    if (unit === 'year') {
      newDate = new Date(
        newDate.setFullYear(newDate.getFullYear() + (event.deltaY < 0 ? 1 : -1))
      );
    } else if (unit === 'month') {
      newDate = new Date(
        newDate.setMonth(newDate.getMonth() + (event.deltaY < 0 ? 1 : -1))
      );
    } else if (unit === 'day') {
      newDate = new Date(
        newDate.setDate(newDate.getDate() + (event.deltaY < 0 ? 1 : -1))
      );
    }

    setSelectedTime(newDate);
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
              placeholder="영양제 추가하기"
            />
            <DatePickerWrapper>
              <DateBox onWheel={(event) => handleWheel(event, 'year')}>
                <DatePicker
                  selected={selectedTime}
                  onChange={(time) => setSelectedTime(time)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  placeholderText="시간 설정"
                />
              </DateBox>
            </DatePickerWrapper>
            <div>
              <StyledButton onClick={handleAdd}>추가하기</StyledButton>
              <StyledButton onClick={handleClose}>닫기</StyledButton>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Modal;
