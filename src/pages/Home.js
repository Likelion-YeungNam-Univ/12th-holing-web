import React from 'react';
import MySummary from 'components/home/mySummary/MySummary';
import SymptomTest from 'components/home/symptomTest/SymptomTest';
import MedicineNote from 'components/home/medicineNote/MedicineNote';
import { Wrapper } from 'styles/home/Home-styled';
import Mission from 'components/home/mission/Mission';

function Home() {
  return (
    <Wrapper>
      <MySummary />
      {/* <PartnerSummary /> */}
      <SymptomTest />
      <MedicineNote />
      <Mission />
    </Wrapper>
  );
}

export default Home;
