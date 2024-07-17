import React, { useState } from 'react';
import {
  ScheduleBox,
  ScheduleList,
  ScheduleItem,
} from '../style/Schedule-styled';

const MySchedule = ({ selectedDate }) => {
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

  return (
    <ScheduleBox>
      <div>{selectedDate}</div>
      <input
        type="text"
        value={newSchedule}
        onChange={handleInputChange}
        placeholder="Add a schedule"
      />
      <button onClick={handleAddSchedule}>Add</button>
      <ScheduleList>
        {schedules[selectedDate] &&
          schedules[selectedDate].map((schedule, index) => (
            <ScheduleItem key={index}>{schedule}</ScheduleItem>
          ))}
      </ScheduleList>
    </ScheduleBox>
  );
};

export default MySchedule;
