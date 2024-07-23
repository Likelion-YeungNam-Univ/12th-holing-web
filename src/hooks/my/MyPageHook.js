import { useState } from 'react';

const MyPageHook = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // 모달을 여는 함수
  const openModal = (item) => {
    // 선택된 아이템을 설정
    setSelectedItem(item);
    // 모달을 열림 상태로 설정
    setIsModalOpen(true);
  };

  // 모달을 닫는 함수
  const closeModal = () => {
    // 모달을 닫음 상태로 설정
    setIsModalOpen(false);
    // 선택된 아이템을 초기화
    setSelectedItem(null);
  };

  return {
    isModalOpen,
    selectedItem,
    openModal,
    closeModal,
  };
};

export default MyPageHook;
