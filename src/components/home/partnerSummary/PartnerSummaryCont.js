import React from 'react';
import { useEffect, useState } from 'react';
import {
  SummaryContainer,
  SummaryConnectContainer,
  Status,
  UserInfo,
  UserProfile,
  Img,
  UserNameContainer,
  UserName,
  PartnerInfo,
  Graph,
  ConnectTitle,
  ConnectDesc,
  ConnectWrapper,
} from 'styles/home/SummaryCont-styled';
import profile_img_male from 'assets/images/profile_img_male.png';
import MyScoreGraph from './MyScoreGraph';
import { getMateReport } from 'apis/user/mateReportGet';
import { getMyReport } from 'apis/user/myReportGet';

function PartnerSummaryCont() {
  const [nickname, setNickname] = useState('');
  const [mateNickname, setMateNickName] = useState('');
  const [gender, setGender] = useState('');
  const [myMateNickname, setMyMateNickname] = useState('');

  useEffect(() => {
    getMateReport()
      .then((response) => {
        const data = response.data;
        setNickname(data.nickname);
        setMateNickName(data.mateNickname);
      })
      .catch((error) => {
        //console.error('Error fetching user data:', error);
      });

    getMyReport()
      .then((response) => {
        const data = response.data;
        setMyMateNickname(data.mateNickname);
      })
      .catch((error) => {
        //console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <>
      {myMateNickname === null ? (
        <SummaryConnectContainer>
          <ConnectWrapper>
            <ConnectTitle>홀링 짝꿍 커넥트</ConnectTitle>
            <ConnectDesc>
              홀링 짝꿍 커넥트를 통해<br/>갱년기를 함께 관리해요
            </ConnectDesc>
          </ConnectWrapper>
        </SummaryConnectContainer>
      ) : (
        <SummaryContainer>
          <UserInfo>
            <Status>호르몬 힐링 중</Status>
            <UserProfile>
              <Img src={profile_img_male} />
              <UserNameContainer>
                <UserName>{nickname} 님</UserName>
                <PartnerInfo>{mateNickname}님의 배우자</PartnerInfo>
              </UserNameContainer>
            </UserProfile>
          </UserInfo>
          <Graph>
            <MyScoreGraph />
          </Graph>
        </SummaryContainer>
      )}
    </>
  );
}

export default PartnerSummaryCont;
