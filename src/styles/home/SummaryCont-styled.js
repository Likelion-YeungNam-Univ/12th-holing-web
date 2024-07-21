import styled from 'styled-components';

export const SummaryContainer = styled.div`
  display: flex;
  align-items: center;
  width: 453px;
  height: 165px;
  border-radius: 13px;
  background-color: #ffffff;
  border-color: #dddddd;
  margin: auto;
  margin-top: 30px;
  border-width: 1px;
  border-style: solid;
  overflow: hidden;
`;

export const UserInfo = styled.div`
  width: 50%; /* Adjust width to fit next to the Graph */
  height: 100%;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const Mark = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #b3b3b3;
  text-align: center;
`;

export const UserNameContainer = styled.div`
  width: calc(100% - 70px); /* Adjust width to account for Mark */
  margin-left: 14px;
`;

export const UserName = styled.div`
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 700;
`;

export const PartnerInfo = styled.div`
  margin-top: 5px;
  font-weight: 500;
  font-size: 14px;
`;

export const Status = styled.div`
  width: 76px;
  height: 17px;
  margin-bottom: 14px;
  color: #9180ff;
  font-weight: 500;
  font-size: 14px;
`;

export const Graph = styled.div`
  width: 164px; /* Set width to 164px */
  height: 164px; /* Set height to 164px */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15%; /* Adjust margin if necessary */
  margin-left: 30px;
  padding: 0; /* Remove any extra padding */
`;