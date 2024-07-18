import React from 'react';
import { SymptomTestBtn } from '../../../styles/home/SympomTest-styled';
import { Link } from 'react-router-dom';

function SymptomTest() {
  return (
    <Link to="/report" style={{ textDecoration: 'none' }}>
      {/*임시 페이지*/}
      <SymptomTestBtn>나의 증상 테스트하기</SymptomTestBtn>
    </Link>
  );
}

export default SymptomTest;
