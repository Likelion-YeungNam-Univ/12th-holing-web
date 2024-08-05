import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SumRepoContainer,
  SumRepoTitleContainer,
  SumRepoHeader,
  SumRepoTitle,
  SumRepoDisc,
  RankContainer,
  Rank,
  RankWrapper,
  RankDesc,
  Divider,
  TitleContainer,
  RepoImg,
  RepoIcon,
} from 'styles/home/SummaryRepo-styled';
import { getMyReport } from 'apis/user/myReportGet';
import DayCount from './DayCount';
import img_homeMaleHi from 'assets/images/home_male_hi.svg';
import img_homeFemaleHi from 'assets/images/home_female_hi.svg';
import img_reportIcon from 'assets/images/home_report_icon.svg';

function MySummaryRepo() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [top1Report, setTop1Report] = useState('');
  const [top2Report, setTop2Report] = useState('');
  const [userRecentReport, setUserRecentReport] = useState('');
  const [myGender, setMyGender] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    getMyReport()
      .then((response) => {
        const data = response.data;
        console.log(data);
        setNickname(data.nickname);
        setTop1Report(data.userRecentReport.top1Report.title);
        console.log(top1Report);
        setTop2Report(data.userRecentReport.top2Report.title);
        setUserRecentReport(data.userRecentReport);
        setMyGender(data.gender);
        setImgUrl(data.userRecentReport.backgroundImgUrl);
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
              <SumRepoTitleContainer>
                <SumRepoTitle>요약 리포트</SumRepoTitle>
                <RepoIcon src={img_reportIcon}></RepoIcon>
              </SumRepoTitleContainer>
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
          <RepoImg src={imgUrl}></RepoImg>
        </>
      ) : (
        <>
          <SumRepoHeader>
            <TitleContainer>
              <SumRepoTitleContainer>
                <SumRepoTitle>요약 리포트</SumRepoTitle>
                <RepoIcon src={img_reportIcon}></RepoIcon>
              </SumRepoTitleContainer>
              <DayCount />
            </TitleContainer>
            <SumRepoDisc>
              {nickname}님의 자가증상 테스트가 완료되어 있지
              <br />
              않아 요약 리포트가 제공되지 않습니다.
            </SumRepoDisc>
          </SumRepoHeader>
          <RepoImg
            src={myGender === 'MALE' ? img_homeFemaleHi : img_homeMaleHi}
          ></RepoImg>
        </>
      )}
    </SumRepoContainer>
  );
}

export default MySummaryRepo;
