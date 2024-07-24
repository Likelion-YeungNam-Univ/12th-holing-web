import React from 'react';
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

import DayCount from './DayCount';

function MySummaryRepo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/report');
  };

  return (
    <SumRepoContainer onClick={handleClick}>
      <SumRepoHeader>
        <TitleContainer>
          <SumRepoTitle>요약 리포트</SumRepoTitle>
          <DayCount />
        </TitleContainer>
        <SumRepoDisc>홍길동님의 리포트를 자세히 살펴보아요</SumRepoDisc>
      </SumRepoHeader>
      <RankWrapper>
        <RankContainer>
          <Rank>TOP1</Rank>
          <RankDesc>
            추위로 인한 <span>체온변화</span>에
            <br /> 가장 큰 어려움을 겪어요
          </RankDesc>
        </RankContainer>
      </RankWrapper>
      <Divider />
      <RankWrapper>
        <RankContainer>
          <Rank>TOP2</Rank>
          <RankDesc>
            <span>감정기복</span>에 심각한
            <br />
            어려움을 겪어요
          </RankDesc>
        </RankContainer>
      </RankWrapper>
    </SumRepoContainer>
  );
}

export default MySummaryRepo;
