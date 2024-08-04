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
import MyScoreGraph from './MyScoreGraph';
import profile_img_female from 'assets/images/profile_img_female.png';
import profile_img_male from 'assets/images/profile_img_male.png';
import { getMyReport } from 'apis/user/myReportGet';

function MySummaryCont() {
  const [nickname, setNickname] = useState('');
  const [mateNickname, setMateNickName] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    getMyReport()
      .then((response) => {
        const data = response.data;
        setNickname(data.nickname);
        setMateNickName(data.mateNickname);
        setGender(data.gender);
      })
      .catch((error) => {
        //console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <SummaryContainer>
      <UserInfo>
        <Status>호르몬 힐링 중</Status>
        <UserProfile>
          <Img
            src={gender === 'MALE' ? profile_img_male : profile_img_female}
          />
          <UserNameContainer>
            <UserName>{nickname} 님</UserName>{' '}
            <PartnerInfo>
              {mateNickname
                ? `${mateNickname}님의 배우자`
                : '짝꿍을 연동해주세요'}
            </PartnerInfo>
          </UserNameContainer>
        </UserProfile>
      </UserInfo>
      <Graph>
        <MyScoreGraph />
      </Graph>
    </SummaryContainer>
  );
}

export default MySummaryCont;
