import styled from 'styled-components';

export const ScheduleBox = styled.div`
  width: 494px;
  height: fit-content;
  margin: 20px auto;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: white;
  padding-left: 35px;
  padding-right: 35px;
  text-align: left;
  border-top: 13px solid #9180FF;
  border-radius: 13px;
`;

export const ScheduleDate = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
  margin-top: 30px;
`;

export const ScheduleComment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ScheduleCheckImg = styled.img`
  margin-right: 6px;
`;

export const Highlight = styled.div`
  color: #9180ff;
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
  text-decoration-line: underline;
  text-underline-offset: 4px;
`;

export const CheckComment = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
`;

export const ScheduleImg = styled.img`
  margin-top: 24px;
`;

export const ScheduleItem = styled.div`
  margin-top: 24px;
  border-bottom: 1px solid #b3b3b3;
`;

export const ScheduleRow = styled.div`
  width: 427px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const BulletPoint = styled.img`
  margin-right: 12px;
`;

export const ScheduleTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export const DeleteBtn = styled.div`
  color: #5b5b5b;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  position: absolute;
  right: 26px;
`;

export const DeleteBtnImg = styled.img`
  position: absolute;
  right: 0;
`;

export const ScheduleContent = styled.div`
  color: #5b5b5b;
  font-size: 20px;
  font-weight: 500;
  margin-top: 12px;
  margin-bottom: 11px;
`;

export const AddScheduleButton = styled.button`
  height: 76px;
  width: 426px;
  background-color: #9180ff;
  border-radius: 21px;
  border: 1px solid #9180ff;
  color: #FFF;
  font-size: 25px;
  font-weight: 600;
  padding: 11px 21px;
  margin-top: 24px;
  margin-bottom: 23px;
`;
