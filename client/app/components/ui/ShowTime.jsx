import React from 'react';

const ShowTime = ({hours, minutes, seconds, ampm}) =>
  <div>
    <span>{`${hours}:${minutes}:${seconds} ${ampm}`}</span>
  </div>;

export default ShowTime;
