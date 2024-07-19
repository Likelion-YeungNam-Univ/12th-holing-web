import React from 'react';
import MySummary from '../components/home/mySummary/MySummary';
import SymptomTest from '../components/home/symptomTest/SymptomTest';
import MedicineNote from '../components/home/medicineNote/MedicineNote';
// import PartnerSummary from '../components/home/partnerSummary/PartnerSummary';

function Home() {
  return (
    <>
      <MySummary />
      {/* <PartnerSummary /> */}
      <SymptomTest />
      <MedicineNote />
    </>
  );
}

export default Home;
