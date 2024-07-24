import { useState } from 'react';

const useMedicineList = () => {
  const [medi, setMedi] = useState([
    { id: 1, text: '오메가3', time: null, completed: false },
    { id: 2, text: '메가슬립 수면엔 미강테아닌', time: null, completed: false },
  ]);

  // 영양제 체크 상태 변경 함수
  const handleToggle = (id) => {
    const updatedMedi = medi.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setMedi(updatedMedi);
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

  return {
    medi,
    handleToggle,
    addNewMedicine,
  };
};

export default useMedicineList;
