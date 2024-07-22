import React from 'react';
import {
  Title,
  Icon,
  Wrapper,
  MissionContainer,
  Desc,
  Button,
} from 'styles/home/Mission-styled';
import icon_mission from 'assets/images/icon_mission.png';

function Mission() {
  const handleClick = () => {};
  return (
    <Wrapper>
      <Title>
        매일매일&nbsp;
        <Icon src={icon_mission} alt="icon" />
        &nbsp;
        <span>짝꿍을 위한 미션</span>을
        <br /> 수행하여 크레딧을 받아요
      </Title>
      <MissionContainer>
        <Desc>짝꿍과의 미션을 통해 원하는 교환품으로 교환할 수 있어요</Desc>
        <Button onClick={handleClick}>미션수행하고 N크레딧 받으러가기</Button>
      </MissionContainer>
    </Wrapper>
  );
}

export default Mission;
