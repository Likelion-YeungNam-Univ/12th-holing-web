import styled from 'styled-components';

export const ScheduleBox = styled.div`
  width: 494px;
  height: 435px;
  margin: 20px auto;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: white;
  padding-left: 35px;
  padding-right: 35px;
  text-align: left;
  border-top: 13px solid #b7acff;
  border-radius: 13px;
`;

export const ScheduleDate = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
  margin-top: 30px;
`;

export const Highlight = styled.span`
  color: #9180ff;
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
  text-decoration-line: underline;
`;

export const CheckComment = styled.span`
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
`;

export const ScheduleList = styled.ul`
  padding: 0;
  margin: 10px 0 0 0;
`;

export const ScheduleItem = styled.li`
  margin: 5px 0;
  padding: 5px;
  border-bottom: 1px solid #ddd;
  font-size: 30px;
  font-weight: 700;
`;

export const ScheduleTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 24px;
`;

export const ScheduleContent = styled.div`
  color: #5b5b5b;
  font-size: 20px;
  font-weight: 500;
  margin-top: 12px;
`;

export const AddScheduleButton = styled.button`
  background-color: white;
  border-radius: 21px;
  border: 1px solid #9180ff;
  background: #fff;
  color: #9180ff;
  font-size: 14px;
  font-weight: 700;
  padding: 11px 21px;
  margin-top: 24px;
`;
