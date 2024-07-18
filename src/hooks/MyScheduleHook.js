//MySchdule Hook
import { useState } from 'react';

const MyScheduleHook = (selectedDate) => {
  const [schedules, setSchedules] = useState({});
  const [newSchedule, setNewSchedule] = useState('');

  const handleInputChange = (e) => {
    setNewSchedule(e.target.value);
  };

  const handleAddSchedule = () => {
    if (newSchedule.trim() === '') return;

    setSchedules((prevSchedules) => {
      const updatedSchedules = { ...prevSchedules };
      if (!updatedSchedules[selectedDate]) {
        updatedSchedules[selectedDate] = [];
      }
      updatedSchedules[selectedDate].push(newSchedule);
      return updatedSchedules;
    });

    setNewSchedule('');
  };

  return {
    schedules,
    newSchedule,
    handleInputChange,
    handleAddSchedule,
  };
};

export default MyScheduleHook;
