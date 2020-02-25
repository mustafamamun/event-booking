import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
const localizer = momentLocalizer(moment);

const Calender = () => {
  const handleSelect = (e: any) => {
    console.log(e);
  };
  const onSelectEvent = (e: any) => {
    console.log(e);
  };
  const onRangeChange = (e: any) => {
    console.log(e);
    // console.log(view);
  };
  const onNavigate = (e: any, view: any) => {
    console.log(e);
    console.log(view);
  };
  return (
    <div style={{ height: '80vh' }}>
      <Calendar
        localizer={localizer}
        selectable
        onSelectSlot={handleSelect}
        events={[]}
        onSelectEvent={onSelectEvent}
        onRangeChange={onRangeChange}
        onNavigate={onNavigate}
      />
    </div>
  );
};

export default Calender;
