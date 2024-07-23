import styled from 'styled-components';

export const MediListContainer = styled.div`
  width: 496px;
  min-height: 211px; /* 최소 높이 설정 */
  padding: 24px 20px;
  margin: auto;
  margin-top: 22px;
  border-radius: 13px;
  background: #ffffff;
  border: 1px solid #dddddd;
  text-align: center;
  /* overflow: auto;  */
`;

export const MedicineName = styled.div`
  display: flex;
  align-items: center;
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
  width: 29px; /* 원하는 너비 */
  height: 30px; /* 원하는 높이 */
  cursor: pointer;
`;

export const AddButton = styled.button`
  width: 149px;
  height: 39px;
  margin-top: 2px;
  border-radius: 17px;
  border: 1px;
  cursor: pointer;
  background: #ffffff;
  color: #9180ff;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid #9180ff;
`;

export const DeleteButton = styled.button`
  /* Frame 1171276606 */
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.87px;
  text-align: left;
  margin-left: 37px;
  border: none;
  background: none;
  color: #5b5b5b;
  display: flex;
  /* align-items: center; */
`;

export const IconAdd = styled.img`
  display: inline-block; /* 인라인 블록 요소로 설정하여 수평 중앙 정렬 */
  vertical-align: middle; /* 수직 정렬 */
`;

export const IconDelete = styled.img`
  display: inline-block;
  vertical-align: middle;
`;

// export const TimeInput = styled.input`
//   width: 60px;
//   margin-left: 1rem;
//   text-align: center;
// `;
