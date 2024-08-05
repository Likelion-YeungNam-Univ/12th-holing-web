import React, { useState, useEffect } from 'react';
import { Count } from 'styles/home/Count-styled';
import { getMateReport } from 'apis/user/mateReportGet';

function DayCount() {

  const [day, setDay] = useState('');

  useEffect(() => {
    getMateReport()
      .then((response) => {
        const data = response.data;
        setDay(data.dDay);
      })
      .catch((error) => {
        //console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="DayCount">
      <header className="count">
        <Count>D+{day}</Count> {/* D+경과 일수 표시 */}
      </header>
    </div>
  );
}

export default DayCount;
