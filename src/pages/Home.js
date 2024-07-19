import React from 'react';
import MySummary from '../components/home/mySummary/MySummary';
import SymptomTest from '../components/home/symptomTest/SymptomTest';
import MedicineNote from '../components/home/medicineNote/MedicineNote';
// import PartnerSummary from '../components/home/partnerSummary/PartnerSummary';
import { Wrapper } from '../styles/home/Home-styled';

function Home() {
  return (
    <Wrapper>
      <MySummary />
      {/* <PartnerSummary /> */}
      <SymptomTest />
      <MedicineNote />
    </Wrapper>
  );
}

export default Home;
