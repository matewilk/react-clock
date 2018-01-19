import C from '../constants'

export const clock = (state = {}, action) => {
  switch (action.type) {
    case C.START_CLOCK:
      return {
        ...state,
        running: action.running
      };

    case C.STOP_CLOCK:
      return {
        ...state,
        running: action.running
      };

    case C.TICK_CLOCK:
      return {
        ...state,
        time: new Date()
      }

    default:
      return state;
  }
};
