import React, { useState, useEffect } from 'react';
import { Count } from 'styles/home/Count-styled';

function DayCount() {
  const initialDate = new Date();
  initialDate.setHours(0, 0, 0, 0);

  const [programStartDate] = useState(initialDate);
  const [currentDate, setCurrentDate] = useState(new Date());

  const calculateDaysElapsed = (startDate, endDate) => {
    const timeDiff = endDate - startDate;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  };

  const [daysElapsed, setDaysElapsed] = useState(
    calculateDaysElapsed(programStartDate, currentDate)
  );

  useEffect(() => {
    const interval = setInterval(
      () => {
        const newDate = new Date();
        setCurrentDate(newDate);
        setDaysElapsed(calculateDaysElapsed(programStartDate, newDate));
      },
      24 * 60 * 60 * 1000
    );

    return () => clearInterval(interval);
  }, [programStartDate]);

  const formattedDaysElapsed = daysElapsed.toString().padStart(3, '0');

  return (
    <div className="DayCount">
      <header className="count">
        <Count>D+{formattedDaysElapsed}</Count>
      </header>
    </div>
  );
}

export default DayCount;
