import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 13px;
  width: 400px;
  max-height: 500px; /* Allow for scrolling within the modal */
  overflow-y: auto; /* Enable vertical scrolling */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1001;
`;

export const StyledInput = styled.input`
  margin-bottom: 10px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  text-align: left;
  border: none;
  width: 100%;
`;

export const DialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
`;

export const Dial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25px;
  height: 159px;

  border-radius: 8px;
  background-color: white;
  position: relative;
`;

export const DialAmPm = styled.div`
  width: 100px;
  height: 60px;

  font-family: Pretendard;
  font-size: 23px;
  font-weight: 600;
  line-height: 27.45px;
  text-align: left;
  margin-top: 20%;
`;

export const Colon = styled.div`
  font-family: Pretendard;
  font-size: 37.48px;
  font-weight: 600;
  line-height: 44.73px;
  display: flex;
  margin-top: 19%;
  align-items: center;
`;

export const DialValue = styled.div`
  font-size: 32px;
  line-height: 1;
  font-weight: bold;
  margin: 20px 0;
  text-align: center;
  user-select: none; /* Prevents text selection while scrolling */
  cursor: pointer; /* Indicates that the value is interactable */
`;

export const Button = styled.div`
  margin-top: 50px;
`;

export const SaveBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 302px;
  height: 53px;
  background: #9180ff;
  border-radius: 13px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 27px;
  color: #ffffff;
  margin: auto;
  margin-top: 16px;
`;

export const CancelBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 302px;
  height: 53px;
  background: #dddddd;
  border-radius: 13px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  color: #b3b3b3;
  margin: auto;
  margin-top: 16px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #b9bec9;
  margin-bottom: 30px;
`;
