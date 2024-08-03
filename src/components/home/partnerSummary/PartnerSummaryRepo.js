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

  useEffect(() => {
    getMateReport()
      .then((response) => {
        const data = response.data;
        setNickname(data.nickname);
        setTop1Report(data.userRecentReport.top1Report.title);
        setTop2Report(data.userRecentReport.top2Report.title);
      })
      .catch((error) => {
        //console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <>
      <SumRepoContainer>
        {/* TODO: 클릭 시 자세한 리포트 페이지로 이동; 추후 구현 예정 */}
        <SumRepoHeader>
          <TitleContainer>
            <SumRepoTitle>요약 리포트</SumRepoTitle>
            <DayCount />
          </TitleContainer>
          <SumRepoDisc>{nickname}님의 리포트를 자세히 살펴보아요</SumRepoDisc>
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
      </SumRepoContainer>
    </>
  );
}

export default PartnerSummaryRepo;
