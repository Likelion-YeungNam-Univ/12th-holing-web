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
  ConnectBtn,
  ConnectDesc,
  RepoImg,
  RepoIcon,
  SumRepoTitleContainer,
} from 'styles/home/SummaryRepo-styled';
import { getMateReport } from 'apis/user/mateReportGet';
import { getMyReport } from 'apis/user/myReportGet';
import DayCount from './DayCount';
import img_missionConnectPlusBtn from 'assets/images/mission_connect_plus_btn.svg';
import img_homeMaleHi from 'assets/images/home_male_hi.svg';
import img_homeFemaleHi from 'assets/images/home_female_hi.svg';
import img_reportIcon from 'assets/images/home_report_icon.svg';

function PartnerSummaryRepo() {
  const [nickname, setNickname] = useState('');
  const [top1Report, setTop1Report] = useState('');
  const [top2Report, setTop2Report] = useState('');
  const [userRecentReport, setUserRecentReport] = useState('');
  const [myMateNickname, setMyMateNickname] = useState('');
  const [myName, setMyName] = useState('');
  const [myGender, setMyGender] = useState('');
  const [mateGender, setMateGender] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getMateReport()
      .then((response) => {
        const data = response.data;
        setNickname(data.nickname);
        setTop1Report(data.userRecentReport.top1Report.title);
        setTop2Report(data.userRecentReport.top2Report.title);
        setUserRecentReport(data.userRecentReport);
        setMateGender(data.gender);
        setImgUrl(data.userRecentReport.backgroundImgUrl);
      })
      .catch((error) => {
        //console.error('Error fetching user data:', error);
      });

    getMyReport()
      .then((response) => {
        const data = response.data;
        setMyName(data.nickname);
        setMyMateNickname(data.mateNickname);
        setMyGender(data.gender);
      })
      .catch((error) => {
        //console.error('Error fetching user data:', error);
      });
  }, []);

  const handleConnectClick = () => {
    navigate('/shareptn');
  };

  return (
    <>
      {myMateNickname === null ? (
        <SumRepoContainer>
          <TitleContainer>
            <SumRepoTitleContainer>
              <SumRepoTitle>짝꿍 리포트</SumRepoTitle>
              <RepoIcon src={img_reportIcon}></RepoIcon>
            </SumRepoTitleContainer>
          </TitleContainer>
          <SumRepoDisc>
            {myName}님의 짝꿍에게 URP를 전송하여
            <br />
            상대방의 갱년기 증상도 함께 알아보아요!
          </SumRepoDisc>
          <ConnectBtn
            src={img_missionConnectPlusBtn}
            onClick={handleConnectClick}
          ></ConnectBtn>
          <ConnectDesc>짝꿍과 커넥트 시작하기</ConnectDesc>
          <RepoImg
            src={myGender === 'MALE' ? img_homeFemaleHi : img_homeMaleHi}
          ></RepoImg>
        </SumRepoContainer>
      ) : (
        <SumRepoContainer>
          {userRecentReport ? (
            <>
              <SumRepoHeader>
                <TitleContainer>
                  <SumRepoTitleContainer>
                    <SumRepoTitle>짝꿍 리포트</SumRepoTitle>
                    <RepoIcon src={img_reportIcon}></RepoIcon>
                  </SumRepoTitleContainer>
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
              <RepoImg src={imgUrl}></RepoImg>
            </>
          ) : (
            <>
              <SumRepoHeader>
                <TitleContainer>
                  <SumRepoTitleContainer>
                    <SumRepoTitle>짝꿍 리포트</SumRepoTitle>
                    <RepoIcon src={img_reportIcon}></RepoIcon>
                  </SumRepoTitleContainer>
                  <DayCount />
                </TitleContainer>
                <SumRepoDisc>
                  해당 주의 짝꿍의 증상 테스트가 완료되어 있지 않아
                  <br />
                  짝꿍의 리포트가 제공되어있지 않습니다.
                  <br />
                  짝꿍에게 테스트를 권해보세요!
                </SumRepoDisc>
              </SumRepoHeader>
              <RepoImg
                src={mateGender === 'MALE' ? img_homeFemaleHi : img_homeMaleHi}
              ></RepoImg>
            </>
          )}
        </SumRepoContainer>
      )}
    </>
  );
}

export default PartnerSummaryRepo;
