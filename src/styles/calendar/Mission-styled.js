import styled from 'styled-components';

export const MissionTitleWrapper = styled.div`
  width: 497px;
  height: 90px;
  margin: 0 auto;
  margin-top: 48px;
  margin-bottom: 48px;
`;

export const MissionTitle1 = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
`;

export const MissionTitleRow = styled.div`
  display: flex;
`;

export const MissionTitleImg = styled.img``;

export const MissionTitle2 = styled.div`
  color: #9180ff;
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
  text-decoration-line: underline;
  text-underline-offset: 4px;
  margin-left: 6px;
`;
export const MissionTitle3 = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
`;

export const MissionCard = styled.div`
  width: 497px;
  height: fit-content;
  border: 1px solid #ddd;
  background-color: white;
  margin: 0 auto;
  margin-bottom: 26px;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 26px;
  border-top: ${({ completedStatus }) =>
    completedStatus === 'active' ? '13px solid #9180ff' : '13px solid #DDD'};
  border-radius: 13px;
  position: relative;
`;

export const MissionConnectTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MissionConnectTitle = styled.div`
  color: #9180ff;
  font-size: 25px;
  font-weight: 700;
`;

export const MissionConnectNextBtn = styled.img`
  margin-left: 4px;
  cursor: pointer;
`;

export const MissionConnectDescription = styled.div`
  color: #5b5b5b;
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
  margin-top: 4px;
  width: 286px;
`;

export const MissionConnectPlusBtn = styled.img`
  margin-top: 39px;
  margin-left: 188px;
  cursor: pointer;
`;

export const MissionConnectStart = styled.div`
  color: #5b5b5b;
  font-size: 20px;
  font-weight: 500;
  margin-top: 22px;
  text-align: center;
  margin-bottom: 36px;
  z-index: 1; // 상단바 위로 올라오지 않도록 수정 by성임
  position: relative;
`;

export const MissionConnectImg = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 1;
`;

export const CreditBox = styled.img``;

export const MissionItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 13px;
  padding-bottom: 13px;
  border-bottom: 1px solid #b3b3b3;
  margin-bottom: 13px;
`;

export const MissionItem = styled.div`
  color: ${({ completedStatus }) =>
    completedStatus === 'active' ? '#B9BEC9' : 'black'};
  text-decoration: ${({ completedStatus }) =>
    completedStatus === 'active' ? 'line-through' : 'none'};
  font-size: 36px;
  font-weight: 600;
  line-height: 140%;
  width: 266px;
  height: fit-content;
  margin-right: 103px;
`;

export const MissionCompleteBtn = styled.img`
  width: 58px;
  height: 60px;
  cursor: pointer;
`;

export const MissionDiscription = styled.div`
  color: #5b5b5b;
  font-size: 20px;
  font-weight: 500;
  line-height: 140%;
  margin-top: 13px;
`;

export const MissionRefreshWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 13px;
  margin-bottom: 21px;
`;

export const MissionRefresh = styled.div`
  color: #5b5b5b;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  cursor: pointer;
`;

export const MissionRefreshImg = styled.img`
  margin-left: 6px;
  cursor: pointer;
`;

export const MissionNoCard = styled.div`
  width: 497px;
  height: fit-content;
  border: 1px solid #ddd;
  background-color: white;
  margin: 0 auto;
  margin-bottom: 26px;
  border-radius: 13px;
  position: relative;
`;

export const MissionNoCardBorderTop = styled.div`
  height: 69px;
  background-color: #9180ff;
  border-radius: 13px 13px 0 0;
`;

export const MissionNoImg = styled.img`
  margin-top: -46px;
  margin-left: 40px;
  position: absolute;
`;

export const MissionNoTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-top: 65px;
  margin-left: 32px;
`;

export const MissionNoDescription = styled.div`
  color: #5b5b5b;
  font-size: 14px;
  font-weight: 500;
  margin-top: 9px;
  margin-bottom: 33px;
  margin-left: 32px;
  margin-right: 32px;
`;
