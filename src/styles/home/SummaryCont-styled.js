import styled from 'styled-components';
import GlobalStyles from '../GlobalStyles';

export const Wrapper = styled.div`
  ${GlobalStyles}
  width: 453px;
  border-radius: 13px;
  background-color: #fbfbfb;
  border-color: #dddddd;
  margin: auto;
  box-shadow: 0px 0px 5px 0px #0000001a;
`;

export const SummaryContainer = styled.div`
  display: flex;
  text-align: center;
  width: 453px;
  height: 165px;
  border-radius: 13px;
  background-color: #ffffff;
  border-color: #dddddd;
  margin: auto;
  box-shadow: 0px 0px 5px 0px #0000001a;
  margin-top: 30px;
  border: 1px;
`;

export const UserInfo = styled.div`
  width: 170px;
  height: 86px;
  padding-top: 44px;
  padding-left: 40px;
`;

export const UserProfile = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  width: 170px;
  height: 56px;
`;

export const Mark = styled.div`
  //나중에 img로 바꾸기
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #b3b3b3;
  text-align: center;
`;

export const UserNameContainer = styled.div`
  width: 104px;
  height: 33px;
  margin-left: 14px;
`;

export const UserName = styled.div`
  width: 110px;

  font-family: Pretendard;
  font-size: 28px;
  font-weight: 700;
  line-height: 33.41px;
  text-align: left;
  align-content: center;
`;

export const PartnerInfo = styled.div`
  width: 104px;
  height: 17px;
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
  line-height: 16.71px;
`;

// export const ScoreGraph = styled.div`
//   width: 164px;
//   height: 164px;
//   background-color: #9180ff;
//   border-radius: 50%;
//   margin: auto;
//   display: flex;
//   align-items: center;
// `;

// export const SummaryReport = styled(Wrapper)`
//   height: auto;
// `;

// export const SumRepoTitle = styled(Wrapper)`
//   color: #ada1ff;
// `;
