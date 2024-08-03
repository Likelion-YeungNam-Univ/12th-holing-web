import React, { useState, useEffect } from 'react';
import {
  ModalOverlay,
  ModalContent,
  StyledInput,
  DialWrapper,
  Dial,
  DialAmPm,
  Colon,
  DialValue,
  Button,
  SaveBtn,
  CancelBtn,
  Divider,
} from 'styles/home/Modal-styled';
import { postMedicines } from 'apis/home/medicineNote/medicinePost';

// 시간 값을 두 자리 숫자로 포맷팅하는 함수
const formatTimeValue = (value) => (value < 10 ? `0${value}` : value);

// 현재 값과 주변 값들을 가져오는 함수
const getSurroundingValues = (value, max, step = 1) => {
  const prev = (value - step + max) % max;
  const next = (value + step) % max;
  return [prev, value, next];
};

// 모달 컴포넌트
const Modal = ({ isOpen, onClose, onAddMedicine }) => {
  // 입력된 새 영양제 이름을 저장하는 상태
  const [medicineData, setMedicineData] = useState('');
  const [newMedicine, setNewMedicine] = useState('');

  // 오전/오후 상태
  const [ampm, setAmPm] = useState('오전');

  // 시 상태
  const [hour, setHour] = useState(12);

  // 분 상태
  const [minute, setMinute] = useState(0);

  // 모달이 열릴 때 스크롤을 막는 효과 적용
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

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    setNewMedicine(e.target.value);
  };

  // 새로운 영양제를 추가하는 함수
  const handleAdd = () => {
    if (newMedicine.trim() !== '') {
      const time = new Date();
      let adjustedHour = hour;

      if (ampm === '오후' && hour !== 12) {
        adjustedHour += 12;
      } else if (ampm === '오전' && hour === 12) {
        adjustedHour = 0;
      }

      time.setHours(adjustedHour);
      time.setMinutes(minute);
      onAddMedicine(newMedicine, time);

      const medicineData = {
        name: newMedicine,
        takenAt: `${formatTimeValue(adjustedHour)}:${formatTimeValue(minute)}`,
      };

      //POST 영양제 생성
      postMedicines(medicineData)
        .then((medicine) => {
          console.log('Data received:', medicine.data);
          setMedicineData(medicine.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });

      setNewMedicine('');
      setAmPm('오전');
      setHour(12);
      setMinute(0);

      onClose();
    }
  };

  // 모달을 닫는 함수
  const handleClose = () => {
    onClose();
    setNewMedicine('');
    setAmPm('오전');
    setHour(12);
    setMinute(0);
  };

  // 휠로 시간을 조절하는 함수
  const handleWheel = (unit, deltaY) => {
    switch (unit) {
      case 'ampm':
        setAmPm((prev) => (prev === '오전' ? '오후' : '오전'));
        break;
      case 'hour':
        setHour((prev) => {
          let newHour = (prev + (deltaY > 0 ? 1 : -1) + 12) % 12;
          if (newHour === 0) newHour = 12;
          if ((prev === 11 && deltaY > 0) || (prev === 12 && deltaY < 0)) {
            setAmPm((prevAmPm) => (prevAmPm === '오전' ? '오후' : '오전'));
          }
          return newHour;
        });
        break;
      case 'minute':
        setMinute((prev) => {
          let newMinute = (prev + (deltaY > 0 ? 5 : -5) + 60) % 60;
          return newMinute;
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={handleClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {/* 영양제 이름 입력 필드 */}
            <StyledInput
              type="text"
              value={newMedicine}
              onChange={handleChange}
              placeholder="먹어야 하는 영양제 이름"
            />
            <Divider />
            {/* 시간 설정 다이얼 */}
            <DialWrapper>
              {/* 오전/오후 설정 다이얼 */}
              <DialAmPm>
                {['오전', '오후'].map((value) => (
                  <DialValue
                    key={value}
                    onWheel={(e) => {
                      e.preventDefault();
                      handleWheel('ampm', e.deltaY < 0 ? 1 : -1);
                    }}
                    style={{
                      color: value === ampm ? 'black' : '#DDD',
                    }}
                  >
                    {value}
                  </DialValue>
                ))}
              </DialAmPm>
              {/* 시 설정 다이얼 */}
              <Dial>
                {getSurroundingValues(hour, 12, 1).map((value, index) => (
                  <DialValue
                    key={index}
                    onWheel={(e) => {
                      e.preventDefault();
                      handleWheel('hour', e.deltaY < 0 ? 1 : -1);
                    }}
                    style={{
                      color: value === hour ? 'black' : '#DDD',
                    }}
                  >
                    {formatTimeValue(value)}
                  </DialValue>
                ))}
              </Dial>
              <Colon>:</Colon>
              {/* 분 설정 다이얼 */}
              <Dial>
                {getSurroundingValues(minute, 60, 5).map((value, index) => (
                  <DialValue
                    key={index}
                    onWheel={(e) => {
                      e.preventDefault();
                      handleWheel('minute', e.deltaY < 0 ? 1 : -1);
                    }}
                    style={{
                      color: value === minute ? 'black' : '#DDD',
                    }}
                  >
                    {formatTimeValue(value)}
                  </DialValue>
                ))}
              </Dial>
            </DialWrapper>
            {/* 저장 및 취소 버튼 */}
            <Button>
              <SaveBtn onClick={handleAdd}>저장하기</SaveBtn>
              <CancelBtn onClick={handleClose}>취소하기</CancelBtn>
            </Button>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Modal;
