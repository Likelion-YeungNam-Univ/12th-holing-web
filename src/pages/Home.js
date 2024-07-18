import React from 'react';
import MySummary from '../components/home/mySummary/MySummary';
import SymptomTest from '../components/home/symptomTest/SymptomTest';
// import PartnerSummary from '../components/home/partnerSummary/PartnerSummary';

function Home() {
  return (
    <>
      <MySummary />
      {/* <PartnerSummary /> */}
      <SymptomTest />
    </>
  );
}

export default Home;
