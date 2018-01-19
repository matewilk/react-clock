import C from '../constants';

export const startClock  = () =>
  ({
    type: C.START_CLOCK,
    running: true
  });

export const stopClock = () =>
  ({
    type: C.STOP_CLOCK,
    running: false
  });

export const tickClock = () =>
  ({
    type: C.TICK_CLOCK
  })