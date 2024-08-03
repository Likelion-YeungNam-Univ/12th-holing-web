import React from 'react';
import { useEffect, useState } from 'react';
import {
  SumRepoContainer,
  SumRepoHeader,
  SumRepoTitle,
  SumRepoDisc,
  RankContainer,
  Rank,
  RankWrapper,
  RankDesc,
  Divider,
  TitleContainer,
} from 'styles/home/SummaryRepo-styled';
import { getMateReport } from 'apis/user/mateReportGet';
import DayCount from './DayCount';

function PartnerSummaryRepo() {
  const [nickname, setNickname] = useState('');
  const [top1Report, setTop1Report] = useState('');
  const [top2Report, setTop2Report] = useState('');
  const [userRecentReport, setUserRecentReport] = useState('');

  useEffect(() => {
    getMateReport()
      .then((response) => {
        const data = response.data;
        setNickname(data.nickname);
        setTop1Report(data.userRecentReport.top1Report.title);
        setTop2Report(data.userRecentReport.top2Report.title);
        setUserRecentReport(data.userRecentReport);
      })
      .catch((error) => {
        //console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <>
      <SumRepoContainer>
        {userRecentReport ? (
          <>
            <SumRepoHeader>
              <TitleContainer>
                <SumRepoTitle>짝꿍 리포트</SumRepoTitle>
                <DayCount />
              </TitleContainer>
              <SumRepoDisc>
                {nickname}님의 리포트를 자세히 살펴보아요
              </SumRepoDisc>
            </SumRepoHeader>
            <RankWrapper>
              <RankContainer>
                <Rank>TOP1</Rank>
                <RankDesc>{top1Report}</RankDesc>
              </RankContainer>
            </RankWrapper>
            <Divider />
            <RankWrapper>
              <RankContainer>
                <Rank>TOP2</Rank>
                <RankDesc>{top2Report}</RankDesc>
              </RankContainer>
            </RankWrapper>
          </>
        ) : (
          <SumRepoHeader>
            <TitleContainer>
              <SumRepoTitle>짝꿍 리포트</SumRepoTitle>
              <DayCount />
            </TitleContainer>
            <SumRepoDisc>
              해당 주의 짝꿍의 증상 테스트가 완료되어 있지 않아 짝꿍의 리포트가
              제공되어있지 않습니다.
              <br />
              짝꿍에게 테스트를 권해보세요!
            </SumRepoDisc>
          </SumRepoHeader>
        )}
      </SumRepoContainer>
    </>
  );
}

export default PartnerSummaryRepo;
