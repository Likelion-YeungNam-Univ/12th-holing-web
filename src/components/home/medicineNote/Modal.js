import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  height: 280px; /* 높이를 늘려서 시간 입력 필드를 추가할 공간 확보 */
`;

const StyledInput = styled.input`
  width: 256px;
  height: 33px;
  margin-bottom: 20px;
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 500;
  line-height: 33.41px;
  text-align: left;

  ::placeholder {
    color: #dddddd;
    font-family: Pretendard;
    font-size: 28px;
    font-weight: 500;
    line-height: 33.41px;
    text-align: left;
  }
`;

const StyledButton = styled.button`
  margin-right: 10px;
`;

const DatePickerWrapper = styled.div`
  margin-bottom: 20px; /* 시간 입력 필드와 다른 요소 사이의 간격 조정 */
`;

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
            </DatePickerWrapper>
            <StyledButton onClick={handleAdd}>추가하기</StyledButton>
            <StyledButton onClick={handleClose}>닫기</StyledButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Modal;
