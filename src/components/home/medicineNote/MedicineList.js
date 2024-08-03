import React, { useState, useEffect } from 'react';
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
import { getMedicines } from 'apis/home/medicineNote/medicineGet';
import { takenMedicine } from 'apis/home/medicineNote/medicineTaken'; // POST 형식
import { deleteMedicine } from 'apis/home/medicineNote/medicineDelete';

// 시간 형식을 24시간 형태로 포맷팅하는 함수
const formatTime = (timeString) => {
  try {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    date.setSeconds(0);
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false, // 24시간 형식
    });
  } catch (error) {
    console.error('Error formatting time:', error);
    return timeString; // 오류 발생 시 원래 문자열 반환
  }
};

// 약 목록을 위한 메인 컴포넌트
function MedicineList() {
  const {
    isModalOpen,
    openModal,
    closeModal,
    addNewMedicine,
    // deleteMedicine,
  } = useMedicineList();

  const [medi, setMedi] = useState([]);

  //GET 영양제 목록 조회
  useEffect(() => {
    const fetchData = async () => {
      try {
        const medicine = await getMedicines();
        console.log('Data received:', medicine.data); // 데이터 본문 출력
        // 모든 약의 isTaken 값을 false로 초기화
        const updatedMedicines = medicine.data.map((item) => ({
          ...item,
          isTaken: false, // 기본적으로 체크되지 않도록 설정
        }));
        setMedi(updatedMedicines); // 상태 업데이트
      } catch (error) {
        console.error('Error fetching data:', error); // 에러 핸들링
      }
    };

    fetchData();
  }, []);

  const handleToggle = (id) => {
    const updatedMedi = medi.map((item) =>
      item.id === id ? { ...item, isTaken: !item.isTaken } : item
    );
    setMedi(updatedMedi);
  };

  //POST 영양제 복용 기록 생성
  const handleTakenMedicine = async (id, isTaken) => {
    // 체크 해제 시 API 호출을 하지 않음
    if (!isTaken) {
      handleToggle(id); // 상태만 업데이트
      return; // 함수 종료
    }

    // 체크된 상태에서만 API 호출
    try {
      const response = await takenMedicine({ id, isTaken: !isTaken });
      console.log(response.data);
      handleToggle(id);
    } catch (error) {
      console.error('Error updating data: ', error);
    }
  };

  // DELETE 영양제 삭제
  const handleDeleteMedicine = async (id) => {
    try {
      await deleteMedicine({ id });
      // 삭제 후 상태 업데이트
      setMedi((prevMedi) => prevMedi.filter((item) => item.id !== id));
      console.log(`약 복용 기록이 삭제되었습니다.`);
    } catch (error) {
      console.error('Error deleting medicine:', error);
    }
  };

  return (
    <MediListContainer>
      {Array.isArray(medi) &&
        medi.map((item) => (
          <MedicineName key={item.id}>
            <Checkbox
              type="checkbox"
              checked={item.isTaken}
              onChange={() => handleTakenMedicine(item.id, item.isTaken)}
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
                  textDecoration: item.isTaken ? 'line-through' : 'none',
                }}
              >
                {item.name}
              </Name>

              {item.takenAt && (
                <Time>
                  <Icon src={icon_alarm} alt="icon" />
                  {formatTime(item.takenAt)}
                </Time>
              )}
            </div>
            <DeleteButton onClick={() => handleDeleteMedicine(item.id)}>
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
