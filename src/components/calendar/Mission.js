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
} from 'styles/calendar/Mission-styled';
import moment from 'moment';
import { createMissions } from 'apis/mission/missionsCreate';
import { getMissions } from 'apis/mission/missionsGet';
import { patchMissions } from 'apis/mission/missionsPatch';
import { completeMissions } from 'apis/mission/missionsComplete';
import img_missionCompleteBtnActive from 'assets/images/mission_complete_btn_active.svg';
import img_missionCompleteBtnInactive from 'assets/images/mission_complete_btn_inactive.svg';

const Mission = (selectedDate) => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    // 미션 조회 포맷 YYYY-MM-DD
    const isoDate = moment(selectedDate.selectedDate, 'YYYY년 M월 D일').format(
      'YYYY-MM-DD'
    );

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

    // selectedDate에 대한 미션 조회
  }, [selectedDate]);

  const handleRefresh = (missionResultId) => {
    patchMissions(missionResultId)
      .then((response) => {
        console.log('Mission refreshed:', response.data);
        // 미션 새로고침 후 최신 미션 조회
        const isoDate = moment(
          selectedDate.selectedDate,
          'YYYY년 M월 D일'
        ).format('YYYY-MM-DD');
        return getMissions(isoDate);
      })
      .then((response) => {
        setMissions(response.data);
        console.log('refreshed missions:', response.data);
      })
      .catch((error) => {
        // 날짜가 지난 미션을 새로고침하거나 이미 새로고침을 한 미션에 대해 새로고침을 한 경우
        console.error('Error refreshing mission:', error);
      });
  };

  const handleComplete = (missionResultId) => {
    completeMissions(missionResultId)
      .then((response) => {
        console.log('Mission completed:', response.data);
        // 미션 완료 후 최신 미션 조회
        const isoDate = moment(
          selectedDate.selectedDate,
          'YYYY년 M월 D일'
        ).format('YYYY-MM-DD');
        return getMissions(isoDate);
      })
      .then((response) => {
        setMissions(response.data);
        console.log('completed missions:', response.data);
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
          <MissionTitle2>미션</MissionTitle2>
          <MissionTitle3>을 수행해보세요</MissionTitle3>
        </MissionTitleRow>
      </MissionTitleWrapper>
      {missions.map((mission) => (
        <MissionCard key={mission.id}>
          <CreditBox>{mission.missionInfoDto.reward}</CreditBox>
          <MissionItemWrapper>
            <MissionItem>{mission.missionInfoDto.missionTitle}</MissionItem>
            <MissionCompleteBtn
              src={mission.isCompleted ? img_missionCompleteBtnActive : img_missionCompleteBtnInactive}
              onClick={() => handleComplete(mission.id)}
              alt="Complete Mission"
            ></MissionCompleteBtn>
          </MissionItemWrapper>
          <MissionDiscription>
            {mission.missionInfoDto.missionContent}
          </MissionDiscription>
          <MissionRefresh onClick={() => handleRefresh(mission.id)}>
            새로고침
          </MissionRefresh>
        </MissionCard>
      ))}
    </>
  );
};

export default Mission;
