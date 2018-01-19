import React from 'react';

const StopButton = ({onStop=f=>f}) =>
  <button onClick={onStop}>Stop</button>;

export default StopButton;
