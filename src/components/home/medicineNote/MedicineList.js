import React, { useState } from 'react';
import {
  MediListContainer,
  MedicineName,
  Checkbox,
  AddButton,
  DeleteButton,
  IconAdd,
  IconDelete,
} from '../../../styles/home/MedicineList-styled';
import Modal from './Modal'; // Modal 컴포넌트 import
import icon_plus from '../../../assets/images/icon_plus.png';
import icon_delete from '../../../assets/images/icon_delete.png';

function MedicineList() {
  const [medi, setMedi] = useState([
    { id: 1, text: '오메가3', time: null, completed: false },
    { id: 2, text: '메가슬립 수면엔 미강테아닌', time: null, completed: false },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 영양제 체크 상태 변경 함수
  const handleToggle = (id) => {
    const updatedMedi = medi.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setMedi(updatedMedi);
  };

  // 모달 열기 함수
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 새로운 영양제 추가 함수
  const addNewMedicine = (newMedicine, time) => {
    const nextId = medi.length + 1;
    const newMedi = [
      ...medi,
      { id: nextId, text: newMedicine, time: time, completed: false },
    ];
    setMedi(newMedi);
  };

  const deleteMedicine = (id) => {
    const updatedMedi = medi.filter((item) => item.id !== id);
    setMedi(updatedMedi);
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
          <DeleteButton onClick={() => deleteMedicine(item.id)}>
            삭제하기
            <IconDelete src={icon_delete} alt="icon" />
          </DeleteButton>
        </MedicineName>
      ))}
      <AddButton onClick={openModal}>
        <IconAdd src={icon_plus} alt="icon" />
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
