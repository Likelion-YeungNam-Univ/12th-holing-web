import React from 'react';

import { Wrapper, Title, Icon } from '../../../styles/home/MedicineNote-styled';

import icon_medi from '../../../assets/images/icon_medi.png';
import MedicineList from './MedicineList';

function MedicineNote() {
  return (
    <Wrapper>
      <Title>
        드셔야 할<br />
      </Title>
      <Title>
        <Icon src={icon_medi} alt="icon" />
        &nbsp;<span>영양제</span>를 체크하세요
      </Title>

      <MedicineList />

      {/* <MedicineList /> */}
    </Wrapper>
  );
}

export default MedicineNote;
