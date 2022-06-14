import React, {useState} from 'react';
import Calendar from 'react-calendar';
import './CalendarModule.css'
const CalendarModule = () => {
  const [date, setDate] = useState(new Date());
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC'
  };
  console.log(date.toLocaleString("ru", options))

  return (
    <div>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} maxDate={new Date()} showNeighboringMonth={false}/>
      </div>
      {/*<p className='text-center'>*/}
      {/*  <span className='bold'>Selected Date:</span>{' '}*/}
      {/*  {date.toLocaleString("ru", options)}*/}
      {/*</p>*/}
    </div>
  );
};

export default CalendarModule;