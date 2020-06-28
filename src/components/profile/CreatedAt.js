import React from 'react';
import dayjs from 'dayjs';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const style = {
  calender: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px 0 5px 0',
  },
};

const CreatedAt = (props) => {
  const { createdAt } = props;
  return (
    <div style={style.calender}>
      <CalendarTodayIcon color="primary" />
      {''}
      <span>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
    </div>
  );
};

export default CreatedAt;
