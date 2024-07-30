import { useEffect, useState } from 'react';
import getSurvey from 'apis/report/getSurvey';

const useSurveyData = () => {
  // 문제 list 관리 hook
  const [tests, setTests] = useState([]);

  useEffect(() => {
    // 증상테스트 문항 get
    getSurvey()
      .then(testList =>{
        setTests(testList);
        console.log("tests[] = ", testList);
      })
      .catch(error => {
        console.log('Error fetching survey:', error);
      });
  }, []);

  return tests;
}

export default useSurveyData;
