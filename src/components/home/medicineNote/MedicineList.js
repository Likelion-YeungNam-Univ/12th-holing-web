import React from 'react';
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
  Name,
} from 'styles/home/MedicineList-styled';
import Modal from './Modal';
import icon_plus from 'assets/images/icon_plus.png';
import icon_delete from 'assets/images/icon_delete.png';
import icon_alarm from 'assets/images/icon_alarm.png';
import useMedicineList from 'hooks/home/useMedicineList';

// 약 목록을 위한 메인 컴포넌트
function MedicineList() {
  // 커스텀 훅을 사용하여 상태와 함수들을 가져옴
  const {
    medi,
    isModalOpen,
    handleToggle,
    openModal,
    closeModal,
    addNewMedicine,
    deleteMedicine,
  } = useMedicineList([
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

  return (
    <MediListContainer>
      {/* 약 목록을 순회하여 각각의 항목을 렌더링 */}
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
            <Name
              style={{
                textDecoration: item.completed ? 'line-through' : 'none',
              }}
            >
              {item.text}
            </Name>

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

      {/* 모달 컴포넌트 */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddMedicine={addNewMedicine}
      />
    </MediListContainer>
  );
}

export default MedicineList;
