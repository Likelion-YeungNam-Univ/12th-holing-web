// components/home/medicineNote/MedicineList.js
import React, { useState } from 'react';
import {
  MediListContainer,
  MedicineName,
  Checkbox,
  AddButton,
  Icon,
} from 'styles/home/MedicineList-styled';
import Modal from './Modal'; // Modal 컴포넌트 import
import icon_plus from 'assets/images/icon_plus.png';
import useMedicineList from 'hooks/home/useMedicineList';

function MedicineList() {
  const { medi, handleToggle, addNewMedicine } = useMedicineList();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달 열기 함수
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <MediListContainer>
      {medi.map((item) => (
        <MedicineName key={item.id}>
          <Checkbox
            type="checkbox"
            checked={item.completed}
            onChange={() => handleToggle(item.id)}
          />
          <span
            style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
          >
            {item.text}
            {item.time &&
              ` - ${item.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
          </span>
        </MedicineName>
      ))}
      <AddButton onClick={openModal}>
        <Icon src={icon_plus} alt="icon" />
        영양제 추가하기
      </AddButton>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddMedicine={addNewMedicine}
      />
    </MediListContainer>
  );
}

export default MedicineList;
