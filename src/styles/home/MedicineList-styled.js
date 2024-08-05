import styled from 'styled-components';

export const MediListContainer = styled.div`
  width: 496px;
  min-height: 211px;
  padding: 24px 20px;
  margin: auto;
  margin-top: 22px;
  border-radius: 13px;
  background: #ffffff;
  border: 1px solid #dddddd;
  text-align: center;
  margin: auto;
  margin-top: 22px;
  box-sizing: border-box;
`;

export const MedicineName = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  margin-bottom: 8px;
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 600;
  line-height: 29.83px;
  text-align: left;
  border-bottom: 1px solid #ccc;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Checkbox = styled.input`
  margin-right: 20px;
  accent-color: #9180ff;
  width: 19px;
  height: 20px;

  cursor: pointer;
`;

export const AddButton = styled.button`
  width: 149px;
  height: 39px;
  margin-top: 2px;
  border-radius: 17px;
  border: 1px solid #9180ff;
  background: #ffffff;
  color: #9180ff;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 700;
  line-height: 17.9px;
  text-align: left;
  margin-left: auto;
  border: none;
  background: none;
  color: #5b5b5b;

  display: flex;
  width: 129px;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

export const IconAdd = styled.img`
  display: inline-block;
  vertical-align: middle;
`;

export const IconDelete = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 17px;
  height: 17px;
`;

export const Icon = styled.img`
  vertical-align: middle;
  width: 14px;
  height: 14px;
  margin-right: 5px;
`;

export const Time = styled.div`
  color: #b9bec9;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const Name = styled.div`
  display: inline-block;
  max-width: 226px; /* 원하는 최대 너비를 설정하세요 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
