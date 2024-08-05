import { useEffect } from 'react';

const calcTestDays = (myReportSummary, setFormattedDate, setFormattedDate7DaysLater, setFormattedDate14DaysLater, setGoTest, setDaysForNext, setDaysForTest) => {
  useEffect(() => {

    // 날짜를 특정 형식으로 포맷
    const formatDate = (date) => {
      if (!(date instanceof Date) || isNaN(date.getTime())) {
        return '';
      }
    // 연, 월, 일을 두자리로 포맷
      const year = date.getFullYear().toString().slice(2);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}${month}${day}`; 
    };

    // report 데이터가 없거나 초기 상태
    // 현재 날짜를 기준으로 7일 후, 14일 후 정보를 설정
    if (myReportSummary.length === 0) {
      const today = new Date();
      const date7DaysLater = new Date(today);
      date7DaysLater.setDate(today.getDate() + 7);

      setFormattedDate(''); //리포트가 없으므로 빈 문자열로 설정
      setFormattedDate7DaysLater(formatDate(date7DaysLater));
      const date14DaysLater = new Date(date7DaysLater);
      date14DaysLater.setDate(date7DaysLater.getDate() + 7);
      setFormattedDate14DaysLater(formatDate(date14DaysLater));
      setGoTest(true); // 테스트 해야 하는 상태로 설정
      setDaysForNext(7);
      setDaysForTest(0); // 현재 테스트를 진행해야하는 상태이므로 0으로 설정
    } else {  // report 데이터 있는 경우
      // report 첫 생성일(firstCreatedAt) 기준으로 7일 후, 14일 후의 날짜 계산
      const firstCreatedAt = myReportSummary[0].createdAt;
      const date = new Date(firstCreatedAt);

      setFormattedDate(formatDate(date));

      const date7DaysLater = new Date(date);
      date7DaysLater.setDate(date.getDate() + 7);
      setFormattedDate7DaysLater(formatDate(date7DaysLater));

      const date14DaysLater = new Date(date7DaysLater);
      date14DaysLater.setDate(date7DaysLater.getDate() + 7);
      setFormattedDate14DaysLater(formatDate(date14DaysLater));

      const today = new Date();
      // 현재 날짜가 7일 후 날짜를 지나면 true -> 테스트 해야하는 상태로 설정
      setGoTest(today >= date7DaysLater);

      const diffTime = date14DaysLater - today;
      const diffDays = Math.floor(Math.abs(diffTime) / (1000 * 60 * 60 * 24));
      setDaysForNext(diffDays);
      console.log("diffDays = ", diffDays);

      const firstDate = new Date(firstCreatedAt);
      const diffTimeFromFirstTo7DaysLater = date7DaysLater - firstDate;
      const diffDaysFromFirstTo7DaysLater = Math.ceil(diffTimeFromFirstTo7DaysLater / (1000 * 60 * 60 * 24));
      setDaysForTest(today >= date7DaysLater ? 0 : diffDaysFromFirstTo7DaysLater);
    }
  }, [myReportSummary, setFormattedDate, setFormattedDate7DaysLater, setFormattedDate14DaysLater, setGoTest, setDaysForNext, setDaysForTest]);
};

export default calcTestDays;
