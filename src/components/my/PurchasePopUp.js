import React from 'react';
import Modal from 'react-modal';
import PuchasePopUpContent from './PurchasePopUpContent';
import { useEffect } from 'react';

const customModalStyles = {
  overlay: {
    position: 'fixed',
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '380px',
    height: '529px',
    borderRadius: '13px',
    margin: 'auto',
    padding: 0,
    zIndex: 1001,
    overflow: 'hidden',
  },
};

const SchedulePopUp = ({ isOpen, onClose, selectedItem, point }) => {
  // 모달이 열릴 때 스크롤 비활성화
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

  // 모달이 열려있지 않으면 null 반환
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen} // 모달 열기 여부
      onRequestClose={onClose} // 모달 닫기 핸들러
      style={customModalStyles} // 커스텀 스타일 적용
      ariaHideApp={true} // 백그라운드 조작 방지
    >
      <PuchasePopUpContent
        selectedItem={selectedItem}
        point={point}
        onClose={onClose}
      ></PuchasePopUpContent>
    </Modal>
  );
};

export default SchedulePopUp;
