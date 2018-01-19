import React from 'react';
import { connect } from 'react-redux';

import { startClock } from "../../actions/actions";

const StartButton = ({onStart=f=>f}) =>
  <button onClick={onStart}>Start</button>

export default connect(
  null,
  dispatch =>
    ({
      onStart(){
        dispatch(startClock())
      }
    })
)(StartButton);
