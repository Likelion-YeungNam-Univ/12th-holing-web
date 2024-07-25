import React from 'react';
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
} from 'styles/login/ServiceDesc-styled';

function ServiceDesc() {
  return (
    <>
      <Img src={level4} alt="Level 4" />{' '}
      <DescContainer>
        <Title>
          전문가의 도움을 받아
          <br />
          <Img src={login_logo_icon} alt="Login Logo Icon" />
          &nbsp;적극적으로 <span>관리할 필요</span>가 있어요
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
