import React from 'react';
import { useState, useEffect } from 'react';
import level1 from 'assets/images/level1.png'; // 추가된 이미지
import level2 from 'assets/images/level2.png'; // 추가된 이미지
import level3 from 'assets/images/level3.png'; // 추가된 이미지
import level4 from 'assets/images/level4.png';
import login_logo_icon from 'assets/images/login_logo_icon.png';
import service_ex1 from 'assets/images/service_ex1.png';
import service_ex2 from 'assets/images/service_ex2.png';
import service_ex3 from 'assets/images/service_ex3.png';
import {
  DescTitle,
  Title,
  Desc,
  DescContainer,
  Img,
  ImgContainter,
  Score,
  Comment,
} from 'styles/login/ServiceDesc-styled';
import LoginButton from './LoginButton';

function ServiceDesc() {
  const [totalScore, setTotalScore] = useState(0);
  const [levelImage, setLevelImage] = useState(level1); // 초기 이미지 설정
  const [comment, setComment] = useState(''); // 코멘트 상태 추가

  // 자가테스트 결과 저장된 점수 합산
  useEffect(() => {
    const storedScores =
      JSON.parse(localStorage.getItem('selfTestScore')) || [];
    const sum = storedScores.reduce((acc, score) => acc + score, 0);
    setTotalScore(sum);
  }, []);

  // totalScore에 따라 다른 메시지와 이미지를 설정
  useEffect(() => {
    if (totalScore >= 18) {
      setLevelImage(level4);
      setComment('갱년기 증상이 많이 나타나요');
    } else if (totalScore >= 14) {
      setLevelImage(level3);
      setComment('갱년기 증상에 대한 케어가 필요해요');
    } else if (totalScore >= 8) {
      setLevelImage(level2);
      setComment('갱년기 증상이 조금 나타나고 있어요');
    } else {
      setLevelImage(level1);
      setComment('갱년기 증상이 거의 없어요');
    }
  }, [totalScore]); // totalScore가 변경될 때마다 실행

  return (
    <>
      <ImgContainter>
        <Img src={levelImage} alt="Level Indicator" />
        <Score>
          20점 만점에 <span>{totalScore}</span>점으로
        </Score>
        <Comment>{comment}</Comment> {/* 코멘트 상태 사용 */}
      </ImgContainter>
      <DescContainer>
        <Title>
          전문가의 도움을 받아
          <br />
          <Img src={login_logo_icon} alt="Login Logo Icon" />
          적극적으로 <span>관리할 필요</span>가 있어요
        </Title>
      </DescContainer>
      <DescContainer>
        <Desc>
          다양한 갱년기 증상으로 인해 중년기 삶의 질이 저하됩니다.
          <br />
          홀링은 동반자의 갱년기 증상 상태를 확인하고 갱년기에 대한 이해도를
          높여,
          <br />
          함께 갱년기와 중년기의 삶을 함께 걷는 호르몬 힐링 서비스입니다.
        </Desc>
      </DescContainer>
      <Img src={service_ex1} alt="Service Example 1" />
      <DescContainer>
        <DescTitle>나와 짝꿍의 갱년기 증상을 한눈에 파악해요</DescTitle>
        <Desc>
          증상 테스트를 통해 얻어진 일주일 리포트를 나뿐만 아니라
          <br />
          짝꿍의 리포트도 함께 확인하여 서로의 상태를 한눈에 파악해요
        </Desc>
      </DescContainer>
      <Img src={service_ex2} alt="Service Example 2" />
      <DescContainer>
        <DescTitle>홀링의 리포트를 더 자세히 살펴보아요</DescTitle>
        <Desc>
          증상 테스트로 어떤 변화가 있었는지를 알아보고
          <br />
          그에 대한 솔루션을 받아보아요
        </Desc>
      </DescContainer>
      <Img src={service_ex3} alt="Service Example 3" />
      <DescContainer>
        <DescTitle>증상 리포트를 토대로 미션을 제안해요</DescTitle>
        <Desc>
          짝꿍의 증상에 따라 맞춤형 미션을 제공하여 서로의 증상에 대한
          <br />
          미션으로 친밀감을 강화합니다
        </Desc>
      </DescContainer>
    </>
  );
}

export default ServiceDesc;
