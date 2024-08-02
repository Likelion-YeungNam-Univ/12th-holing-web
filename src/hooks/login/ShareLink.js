// components/CustomModal.js
import React from 'react';
import Modal from 'react-modal'; // react-modal 라이브러리 임포트
import styled from 'styled-components'; // styled-components 라이브러리 임포트
import { useSpring, animated } from 'react-spring'; // react-spring 라이브러리 임포트

// Modal의 루트 엘리먼트를 설정합니다. 이는 모달이 열린 상태에서 접근성 문제를 해결합니다.
Modal.setAppElement('#root');

// Styled-Components를 사용하여 애니메이션 가능한 StyledModal 컴포넌트를 정의합니다.
const StyledModal = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0);
  position: fixed; // 화면에 고정
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

// 모달의 내용을 스타일링하는 컴포넌트를 정의합니다.
const ModalContent = styled.div`
  background: white; // 배경 색상
  padding: 20px; // 내부 여백
  border-radius: 10px; // 모서리를 둥글게
  text-align: center; // 텍스트를 중앙 정렬
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); // 그림자 효과
  font-size: 13px;
`;

// 모달 내 버튼을 스타일링하는 컴포넌트를 정의합니다.
const ModalButton = styled.button`
  margin-top: 20px; // 위쪽 여백
  padding: 10px 20px; // 내부 여백
  background-color: #9180ff; // 배경 색상
  color: white; // 텍스트 색상
  border: none; // 테두리 제거
  border-radius: 5px; // 모서리를 둥글게
  cursor: pointer; // 커서 모양 변경

  &:hover {
    background-color: white;
    border: 2px solid #9180ff;
    /* border-color: #9180ff; */
    color: #9180ff;
  }
`;

// ShareLink 컴포넌트는 모달의 열림/닫힘 상태에 따라 애니메이션을 적용합니다.
const ShareLink = ({ isOpen, onRequestClose, contentLabel }) => {
  // useSpring 훅을 사용하여 애니메이션 상태를 정의합니다.
  const animation = useSpring({
    transform: isOpen ? 'translateY(0)' : 'translateY(100%)', // 모달의 위치를 아래에서 위로 이동
    opacity: isOpen ? 1 : 0, // 모달의 투명도 조절
    config: { tension: 200, friction: 20 }, // 애니메이션 설정
  });

  return (
    <Modal
      isOpen={isOpen} // 모달이 열려 있는지 여부
      onRequestClose={onRequestClose} // 모달 닫기 요청 시 호출되는 함수
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }, // 오버레이 배경
        content: { inset: 0, border: 'none', background: 'none', padding: 0 }, // 모달 내용 스타일 제거
      }}
    >
      <StyledModal style={animation}>
        <ModalContent>
          <h2>{contentLabel}</h2> {/* 모달의 제목 */}
          <ModalButton onClick={onRequestClose}>닫기</ModalButton>{' '}
          {/* 닫기 버튼 */}
        </ModalContent>
      </StyledModal>
    </Modal>
  );
};

export default ShareLink; // 컴포넌트를 기본 내보내기로 내보냅니다.
