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
import { takenMedicine } from 'apis/home/medicineNote/medicineTaken';
import { deleteMediRec } from 'apis/home/medicineNote/mediRecDelete';
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
  const { isModalOpen, openModal, closeModal } = useMedicineList();
  const [medi, setMedi] = useState([]);

  // GET 영양제 목록 조회
  const fetchData = async () => {
    try {
      const medicine = await getMedicines();
      console.log('Data received:', medicine.data);
      const updatedMedicines = medicine.data.map((item) => ({
        ...item,
        isTaken: false, // 기본적으로 체크되지 않도록 설정
      }));
      setMedi(updatedMedicines);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 새로운 영양제를 추가하는 함수
  const addNewMedicine = (medicineData) => {
    setMedi((prevMedi) => [...prevMedi, { ...medicineData, id: Date.now() }]); // ID는 임시로 현재 시간을 사용
    console.log(medicineData);

    fetchData();
  };

  const handleToggle = (medicineId) => {
    setMedi((prevMedi) =>
      prevMedi.map((item) =>
        item.id === medicineId ? { ...item, isTaken: !item.isTaken } : item
      )
    );
  };

  // POST 영양제 복용 기록 생성
  const handleTakenMedicine = async (medicineId) => {
    // medi에서 해당 medicineId에 해당하는 항목을 찾음
    const medicine = medi.find((item) => item.id === medicineId);
    console.log(medicine);

    // 만약 해당 항목이 존재하지 않는다면 함수 종료
    if (!medicine) {
      console.error('Medicine not found');
      return;
    }

    handleToggle(medicine.id); // 상태 업데이트를 먼저 수
    console.log(medicine.id);

    if (!medicine.isTaken) {
      try {
        console.log('sdsdfs');
        const response = await takenMedicine(medicine.id);
        console.log(response.data);
      } catch (error) {
        console.error('Error updatingx data: ', error);
      }
    } else {
      handleDelMediRec(medicine.id);
    }
  };

  // DELETE 영양제 삭제
  const handleDeleteMedicine = async (medicineId) => {
    try {
      const res = await deleteMedicine(medicineId);
      console.log(res);
      setMedi((prevMedi) => prevMedi.filter((item) => item.id !== medicineId));
      // console.log(`영양제가 삭제되었습니다.`);
    } catch (error) {
      console.error('Error deleting medicine:', error);
    }
  };

  // DELETE 영양제 복용 기록 삭제
  const handleDelMediRec = async (id) => {
    try {
      console.log(id);
      const res = await deleteMediRec(id);
      console.log(res);
      // console.log(`영양제 복용 기록이 삭제되었습니다.`);
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
              onChange={(e) => handleTakenMedicine(item.id, e.target.checked)}
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
        onAddMedicine={addNewMedicine} // 추가된 영양제 상태 업데이트 함수 전달
      />
    </MediListContainer>
  );
}

export default MedicineList;
