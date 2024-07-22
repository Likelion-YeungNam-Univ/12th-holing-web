import styled, { css } from 'styled-components';

export const SchedulePopUpContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ScheduleTitle = styled.input`
  color: #ddd;
  font-size: 28px;
  font-weight: 500;
  text-decoration-line: underline;
  border: none;
`;

export const ScheduleBody = styled.input`
  color: #5b5b5b;
  font-size: 20px;
  font-weight: 500;
  margin-top: 35px;
  border: none;
`;

const popupButtonStyle = css`
  border-radius: 13px;
  font-size: 23px;
  border: none;
  width: 302px;
  height: 53px;
  font-weight: 600;
`;

export const SchedulePopUpSaveBtn = styled.button`
  ${popupButtonStyle}
  background: #9180ff;
  color: #fff;
  margin-top: 202px;
`;

export const SchedulePopUpCancelBtn = styled.button`
  ${popupButtonStyle}
  background: #ddd;
  color: #b3b3b3;
  margin-top: 19px;
`;
