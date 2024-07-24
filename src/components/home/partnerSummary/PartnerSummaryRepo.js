import React from 'react';
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
} from 'styles/home/SummaryRepo-styled';

function PartnerSummaryRepo() {
  return (
    <>
      <SumRepoContainer>
        {/* TODO: 클릭 시 자세한 리포트 페이지로 이동; 추후 구현 예정 */}
        <SumRepoHeader>
          <SumRepoTitle>요약 리포트</SumRepoTitle>
          <SumRepoDisc>길동홍님의 리포트를 자세히 살펴보아요</SumRepoDisc>
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
    </>
  );
}

export default PartnerSummaryRepo;
