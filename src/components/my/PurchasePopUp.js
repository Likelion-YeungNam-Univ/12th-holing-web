import React from 'react';
import Modal from 'react-modal';
import PuchasePopUpContent from './PurchasePopUpContent';

const customModalStyles = {
  overlay: {
    position: 'fixed',
    zIndex: 1000,
  },
  content: {
    width: '380px',
    height: '529px',
    margin: 'auto',
    padding: 0,
    zIndex: 1001,
  },
};

const SchedulePopUp = ({ isOpen, onClose, selectedItem }) => {
  // 모달이 열려있지 않으면 null 반환
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen} // 모달 열기 여부
      onRequestClose={onClose} // 모달 닫기 핸들러
      style={customModalStyles} // 커스텀 스타일 적용
      ariaHideApp={false} // 백그라운드 조작 방지
    >
      <PuchasePopUpContent selectedItem={selectedItem}></PuchasePopUpContent>
    </Modal>
  );
};

export default SchedulePopUp;
