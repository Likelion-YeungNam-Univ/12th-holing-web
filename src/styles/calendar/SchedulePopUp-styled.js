import styled from 'styled-components';

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

export const SchedulePopUpSaveBtn = styled.button`
  border-radius: 13px;
  background: #9180ff;
  color: var(--White-01, #fff);
  font-size: 23px;
  font-weight: 600;
  border: none;
  width: 302px;
  height: 53px;
  margin-top: 202px;
`;

export const SchedulePopUpCancelBtn = styled.button`
  border-radius: 13px;
  background: #ddd;
  color: #b3b3b3;
  font-size: 23px;
  font-weight: 600;
  border: none;
  width: 302px;
  height: 53px;
  margin-top: 19px;
`;
