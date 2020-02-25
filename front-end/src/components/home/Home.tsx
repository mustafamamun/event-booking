import React from 'react';
import Overlay from '../overlay/Overlay';
import './style/home.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Calendar from '../calendar/Calender';

const HomeComponent: React.FC = () => {
  return (
    <div className="mt-4 pt-2">
      {/* <Overlay /> */}
      <Calendar />
    </div>
  );
};

export default HomeComponent;
