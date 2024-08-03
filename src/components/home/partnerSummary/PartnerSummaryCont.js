import React from 'react';
import { useEffect, useState } from 'react';
import {
  SummaryContainer,
  Status,
  UserInfo,
  UserProfile,
  Img,
  UserNameContainer,
  UserName,
  PartnerInfo,
  Graph,
} from 'styles/home/SummaryCont-styled';
import profile_img_male from 'assets/images/profile_img_male.png';
import MyScoreGraph from './MyScoreGraph';
import { getMateReport } from 'apis/user/mateReportGet';

function PartnerSummaryCont() {
  const [nickname, setNickname] = useState('');
  const [mateNickname, setMateNickName] = useState('');
  const [gender, setGender] = useState('');

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
  }, []);

  return (
    <>
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
    </>
  );
}

export default PartnerSummaryCont;
