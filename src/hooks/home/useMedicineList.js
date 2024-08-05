import { useState } from 'react';

// 약 목록을 관리하는 커스텀 훅
function useMedicineList(initialMedi) {
  // 약 목록을 저장하는 상태
  const [medi, setMedi] = useState(initialMedi);
  const [medicines, setMedicines] = useState([]);

  // 모달의 표시 여부를 저장하는 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 약의 완료 상태를 토글하는 함수
  const handleToggle = (id) => {
    const updatedMedi = medi.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setMedi(updatedMedi);
  };

  // 모달을 여는 함수
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달을 닫는 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 새로운 약을 목록에 추가하는 함수
  const addNewMedicine = (medicineName, time) => {
    const newMedicine = { name: medicineName, takenAt: time };
    setMedicines((prevMedicines) => [...prevMedicines, newMedicine]);
    console.log('새로운 영양제:', newMedicine);
  };

  // 약을 목록에서 삭제하는 함수
  const deleteMedicine = (id) => {
    const updatedMedi = medi.filter((item) => item.id !== id);
    setMedi(updatedMedi);
  };

  // 훅에서 반환하는 값과 함수들
  return {
    medi,
    isModalOpen,
    handleToggle,
    openModal,
    closeModal,
    addNewMedicine,
    deleteMedicine,
  };
}

export default useMedicineList;
