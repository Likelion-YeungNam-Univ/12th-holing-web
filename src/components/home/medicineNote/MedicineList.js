import React, { useState } from 'react';
import {
  MediListContainer,
  MedicineName,
  Checkbox,
  AddButton,
  DeleteButton,
  IconAdd,
  IconDelete,
  Icon,
  Time,
} from 'styles/home/MedicineList-styled';
import Modal from './Modal';
import icon_plus from 'assets/images/icon_plus.png';
import icon_delete from 'assets/images/icon_delete.png';
import icon_alarm from 'assets/images/icon_alarm.png';

function MedicineList() {
  const [medi, setMedi] = useState([
    {
      id: 1,
      text: '오메가3',
      time: new Date().setHours(8, 0, 0, 0),
      completed: false,
    },
    {
      id: 2,
      text: '메가슬립 수면엔 미강테아닌',
      time: new Date().setHours(22, 0, 0, 0),
      completed: false,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = (id) => {
    const updatedMedi = medi.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setMedi(updatedMedi);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                textDecoration: item.completed ? 'line-through' : 'none',
              }}
            >
              {item.text}
            </span>
            {item.time && (
              <Time>
                <Icon src={icon_alarm} alt="icon" />
                {new Date(item.time).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                })}
              </Time>
            )}
          </div>
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