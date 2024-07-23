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
  //   ScoreGraph,
} from 'styles/home/SummaryCont-styled';
import profile_img_male from 'assets/images/profile_img_male.png';

function PartnerSummaryCont() {
  return (
    <>
      <SummaryContainer>
        <UserInfo>
          <Status>우울한갱년기</Status>
          <UserProfile>
            <Img src={profile_img_male} />
            <UserNameContainer>
              <UserName>길동홍 님</UserName> {/* 추후에 이름 받아와서 변경 */}
              <PartnerInfo>홍길동님의 배우자</PartnerInfo>{' '}
              {/* 추후에 이름 받아와서 변경 */}
            </UserNameContainer>
          </UserProfile>
          {/* <ScoreGraph /> */}
        </UserInfo>
      </SummaryContainer>
    </>
  );
}

export default PartnerSummaryCont;
