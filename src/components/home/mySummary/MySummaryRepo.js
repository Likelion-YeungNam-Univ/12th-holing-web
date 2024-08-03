import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { getMyReport } from 'apis/user/myReportGet';
import DayCount from './DayCount';

function MySummaryRepo() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [top1Report, setTop1Report] = useState('');
  const [top2Report, setTop2Report] = useState('');
  const [userRecentReport, setUserRecentReport] = useState('');

  useEffect(() => {
    getMyReport()
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

  const handleClick = () => {
    navigate('/report');
  };

  return (
    <SumRepoContainer onClick={handleClick}>
      {userRecentReport ? (
        <>
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
        </>
      ) : (
        <SumRepoHeader>
          <TitleContainer>
            <SumRepoTitle>요약 리포트</SumRepoTitle>
            <DayCount />
          </TitleContainer>
          <SumRepoDisc>{nickname}님의 자가증상 테스트가 완료되어 있지 않아 요약 리포트가 제공되지 않습니다.</SumRepoDisc>
        </SumRepoHeader>
      )}
    </SumRepoContainer>
  );
}

export default MySummaryRepo;
