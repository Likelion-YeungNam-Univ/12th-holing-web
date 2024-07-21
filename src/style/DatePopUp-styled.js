import styled from 'styled-components';

export const DateWrapper = styled.div`
  display: flex;
  gap: 29px;
`;

export const DateColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 27px;
`;

export const DateBox = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
`;

export const PreviousDate = styled.div`
  color: #ddd;
  font-size: 32px;
  font-weight: 600;
`;

export const NextDate = styled.div`
  color: #ddd;
  font-size: 32px;
  font-weight: 600;
`;

export const DatePopUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DatePopUpSaveBtn = styled.button`
  color: #fff;
  font-size: 23px;
  font-weight: 600;

  border-radius: 13px;
  background: #9180ff;
  border: none;

  display: flex;
  width: 302px;
  height: 53px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin-top: 85px;
`;

export const DatePopUpCancelBtn = styled.button`
  color: #b3b3b3;
  font-size: 23px;
  font-weight: 600;

  border-radius: 13px;
  background: #ddd;
  border: none;

  display: flex;
  width: 302px;
  height: 53px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin-top: 16px;
`;
