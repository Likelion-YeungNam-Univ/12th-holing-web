import styled, { css } from 'styled-components';

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

const popupButtonStyle = css`
  font-size: 23px;
  font-weight: 600;
  border-radius: 13px;
  border: none;
  display: flex;
  width: 302px;
  height: 53px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const DatePopUpSaveBtn = styled.button`
  ${popupButtonStyle}
  color: #fff;
  background: #9180ff;
  margin-top: 85px;
`;

export const DatePopUpCancelBtn = styled.button`
  ${popupButtonStyle}
  color: #b3b3b3;
  background: #ddd;
  margin-top: 16px;
`;
