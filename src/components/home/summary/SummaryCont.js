import React from 'react';
import {
  SummaryContainer,
  Status,
  UserInfo,
  UserProfile,
  Mark,
  UserNameContainer,
  UserName,
  PartnerInfo,
  //   ScoreGraph,
} from '../../../styles/home/SummaryCont-styled';

function SummaryCont() {
  return (
    <>
      <SummaryContainer>
        <UserInfo>
          <Status>우울한갱년기</Status>
          <UserProfile>
            <Mark></Mark>
            <UserNameContainer>
              <UserName>홍길동 님</UserName> {/* 추후에 이름 받아와서 변경 */}
              <PartnerInfo>길동홍님의 배우자</PartnerInfo>{' '}
              {/* 추후에 이름 받아와서 변경 */}
            </UserNameContainer>
          </UserProfile>
          {/* <ScoreGraph /> */}
        </UserInfo>
      </SummaryContainer>
    </>
  );
}

export default SummaryCont;
