import React from 'react';
import { useEffect, useState } from 'react';
import {
  MissionTitleWrapper,
  MissionTitle1,
  MissionTitle2,
  MissionTitle3,
  MissionTitleRow,
  MissionCard,
  MissionItem,
  MissionDiscription,
  MissionRefresh,
  MissionItemWrapper,
  CreditBox,
  MissionCompleteBtn,
  MissionConnectTitle,
  MissionConnectDescription,
  MissionConnectPlusBtn,
  MissionConnectStart,
  MissionConnectImg,
  MissionConnectNextBtn,
  MissionConnectTitleWrapper,
  MissionTitleImg,
  MissionNoCard,
  MissionNoImg,
  MissionNoTitle,
  MissionNoDescription,
  MissionNoCardBorderTop,
  MissionRefreshImg,
  MissionRefreshWrapper,
} from 'styles/calendar/Mission-styled';
import moment from 'moment';
import { createMissions } from 'apis/mission/missionsCreate';
import { getMissions } from 'apis/mission/missionsGet';
import { patchMissions } from 'apis/mission/missionsPatch';
import { completeMissions } from 'apis/mission/missionsComplete';
import { getUserInfo } from 'apis/my/userInfoGet';
import img_missionCompleteBtnActive from 'assets/images/mission_complete_btn_active.svg';
import img_missionCompleteBtnInactive from 'assets/images/mission_complete_btn_inactive.svg';
import img_missionConnectMale from 'assets/images/mission_connect_img_male.svg';
import img_missionConnectFemale from 'assets/images/mission_connect_img_female.svg';
import img_missionConnectPlusBtn from 'assets/images/mission_connect_plus_btn.svg';
import img_missionConnectNextBtn from 'assets/images/mission_connect_next_btn.svg';
import img_missionTitle from 'assets/images/mission_title_img.svg';
import img_missionNo from 'assets/images/mission_no_img.svg';
import img_missionCredit from 'assets/images/mission_credit_img.svg';
import img_missionRefresh from 'assets/images/mission_refresh_img.svg';

const Mission = ({ selectedDate, updateMissions }) => {
  const [missions, setMissions] = useState([]);
  const [gender, setGender] = useState('');

  useEffect(() => {
    // 미션 조회 포맷 YYYY-MM-DD
    const isoDate = moment(selectedDate, 'YYYY년 M월 D일').format('YYYY-MM-DD');

    // API 호출을 통해 미션 생성하기
    createMissions()
      .then((response) => {
        console.log('missions:', response.data);
      })
      .catch((error) => {
        // 미션을 한번 생성하면 409 에러 발생
        console.error('Missions already exists:', error);
      });

    // API 호출을 통해 미션 조회하기
    getMissions(isoDate)
      .then((response) => {
        setMissions(response.data);
        console.log('missions:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching missions:', error);
      });

    // API 호출을 통해 성별 조회하기
    getUserInfo()
      .then((response) => {
        const data = response.data;
        setGender(data.gender);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });

    // selectedDate에 대한 미션 조회
  }, [selectedDate]);

  // 새로고침 버튼 눌렀을 때 미션 교체
  const handleRefresh = (missionResultId) => {
    patchMissions(missionResultId)
      .then((response) => {
        console.log('Mission refreshed:', response.data);
        // 미션 새로고침 후 최신 미션 조회
        const isoDate = moment(selectedDate, 'YYYY년 M월 D일').format(
          'YYYY-MM-DD'
        );
        return getMissions(isoDate);
      })
      .then((response) => {
        setMissions(response.data);
        console.log('refreshed missions:', response.data);
      })
      .catch((error) => {
        // 날짜가 지난 미션을 새로고침하거나 이미 새로고침을 한 미션에 대해 새로고침을 한 경우
        // 새로 고침은 하나의 미션에 대해서만 가능함
        console.error('Error refreshing mission:', error);
      });
  };

  // 완료 체크 눌렀을 때 미션 완료
  const handleComplete = (missionResultId) => {
    completeMissions(missionResultId)
      .then((response) => {
        console.log('Mission completed:', response.data);
        // 미션 완료 후 최신 미션 조회
        const isoDate = moment(selectedDate, 'YYYY년 M월 D일').format(
          'YYYY-MM-DD'
        );
        return getMissions(isoDate);
      })
      .then((response) => {
        setMissions(response.data);
        const isoDate = moment(selectedDate, 'YYYY년 M월 D일').format(
          'YYYY-MM-DD'
        );
        console.log('completed missions:', response.data);
        updateMissions(isoDate, 1);
      })
      .catch((error) => {
        console.error('Error completing mission:', error);
      });
  };

  return (
    <>
      <MissionTitleWrapper>
        <MissionTitle1>당신의 짝꿍을 위한</MissionTitle1>
        <MissionTitleRow>
          <MissionTitleImg src={img_missionTitle}></MissionTitleImg>
          <MissionTitle2>미션</MissionTitle2>
          <MissionTitle3>을 수행해보세요</MissionTitle3>
        </MissionTitleRow>
      </MissionTitleWrapper>
      {missions.isMateConnected === false ? (
        <MissionCard>
          <MissionConnectTitleWrapper>
            <MissionConnectTitle>짝꿍 미션</MissionConnectTitle>
            <MissionConnectNextBtn
              src={img_missionConnectNextBtn}
            ></MissionConnectNextBtn>
          </MissionConnectTitleWrapper>
          <MissionConnectDescription>
            짝꿍의 증상에 따라 맞춤형 미션을 제공하여 서로의 증상에 대한
            미션으로 친밀감을 강화합니다.
          </MissionConnectDescription>
          <MissionConnectPlusBtn
            src={img_missionConnectPlusBtn}
          ></MissionConnectPlusBtn>
          <MissionConnectImg
            src={
              gender === 'MALE'
                ? img_missionConnectFemale
                : img_missionConnectMale
            }
            alt="Connect Image"
          ></MissionConnectImg>
          <MissionConnectStart>짝꿍과 커넥트 시작하기</MissionConnectStart>
        </MissionCard>
      ) : missions.length === 0 ? (
        <MissionNoCard>
          <MissionNoCardBorderTop></MissionNoCardBorderTop>
          <MissionNoImg src={img_missionNo}></MissionNoImg>
          <MissionNoTitle>미션 리스트가 없습니다</MissionNoTitle>
          <MissionNoDescription>
            해당 주의 짝꿍의 증상테스트가 완료되어있지 않거나 사이트에 접속하지
            않은 경우 미션 리스트가 생성되지 않았을 수 있습니다.
          </MissionNoDescription>
        </MissionNoCard>
      ) : (
        missions.map((mission) => (
          <MissionCard key={mission.id} isCompleted={mission.isCompleted}>
            <CreditBox src={img_missionCredit}></CreditBox>
            <MissionItemWrapper>
              <MissionItem isCompleted={mission.isCompleted}>
                {mission.missionInfoDto.missionTitle}
              </MissionItem>
              <MissionCompleteBtn
                src={
                  mission.isCompleted
                    ? img_missionCompleteBtnActive
                    : img_missionCompleteBtnInactive
                }
                onClick={() => handleComplete(mission.id)}
                alt="Complete Mission"
              />
            </MissionItemWrapper>
            <MissionDiscription>
              {mission.missionInfoDto.missionContent}
            </MissionDiscription>
            <MissionRefreshWrapper>
              <MissionRefresh onClick={() => handleRefresh(mission.id)}>
                새로고침
              </MissionRefresh>
              <MissionRefreshImg
                src={img_missionRefresh}
                onClick={() => handleRefresh(mission.id)}
              ></MissionRefreshImg>
            </MissionRefreshWrapper>
          </MissionCard>
        ))
      )}
    </>
  );
};

export default Mission;
