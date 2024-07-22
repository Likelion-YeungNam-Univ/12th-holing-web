import React from 'react';
import {
  ScheduleBox,
  ScheduleList,
  ScheduleItem,
} from 'style/Schedule-styled';
import MyScheduleHook from 'hooks/MyScheduleHook';

const MySchedule = ({ selectedDate }) => {
  const { schedules, newSchedule, handleInputChange, handleAddSchedule } =
    MyScheduleHook(selectedDate);

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
