import React from 'react';
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
function MySummaryCont() {
  return (
    <SummaryContainer>
      <UserInfo>
        <Status>우울한갱년기</Status>
        <UserProfile>
          <Img src={profile_img_female} />
          <UserNameContainer>
            <UserName>홍길동 님</UserName> {/* 추후에 이름 받아와서 변경 */}
            <PartnerInfo>길동홍님의 배우자</PartnerInfo>{' '}
            {/* 추후에 이름 받아와서 변경 */}
          </UserNameContainer>
        </UserProfile>
      </UserInfo>
      <Graph>
        <MyScoreGraph />
      </Graph>
      {/* </UserInfo> */}
    </SummaryContainer>
  );
}

export default MySummaryCont;
