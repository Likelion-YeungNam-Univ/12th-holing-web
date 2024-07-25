import React from 'react';
import {
  Container,
  Title,
  Desc,
  RepoContainer,
  RepoHeader,
  RepoTitle,
  RepoDisc,
  Connecter,
  Img,
  StartDesc,
} from 'styles/home/PtnConnect-styled';
import home_plus from '../../../assets/images/home_plus.png';
function PtnConnect() {
  return (
    <>
      <Container>
        <Title>홀링 짝꿍 커넥트</Title>
        <Desc>
          홀링 짝꿍 커넥트를 통해
          <br />
          갱년기를 함께 관리해요
        </Desc>
      </Container>

      <RepoContainer>
        {/* TODO: 클릭 시 짝꿍연동페이지로 이동; 추후 구현 예정 */}
        <RepoHeader>
          <RepoTitle>짝꿍 리포트</RepoTitle>
          <RepoDisc>
            홍길동님의 짝꿍에게 URP를 전송하여
            <br />
            상대방의 갱년기 증상도 함께 알아보아요
          </RepoDisc>
        </RepoHeader>
        <Connecter>
          <Img src={home_plus} alt="img" />
          <StartDesc>짝꿍과 커넥트 시작하기</StartDesc>
        </Connecter>
      </RepoContainer>
    </>
  );
}

export default PtnConnect;
