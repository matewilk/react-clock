import React from 'react';
import { connect } from 'react-redux';

import ShowTime from './ui/ShowTime';
import StartButton from './ui/StartButton';
import StopButton from './ui/StopButton';
import { tickClock} from "../actions/actions";

const compose = (...fns) => (arg) => {
  return fns.reduce((composed, fn) => {
    return fn(composed)
  }, arg);
};


class Clock extends React.Component {
  constructor (props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.tick = this.tick.bind(this);

    this.composeTime = this.composeTime.bind(this);
    this.doubleDigits = this.doubleDigits.bind(this);
  }

  serializeTime (datetime) {
    return {
      hours: datetime.getHours(),
      minutes: datetime.getMinutes(),
      seconds: datetime.getSeconds(),
      ampm: datetime.getHours() > 12 ? 'PM' : 'AM'
    }
  }

  civilianTime (time) {
    return {
      ...time,
      hours: time.hours > 12 ?
        time.hours - 12 :
        time.hours
    }
  }

  prependZeros (key) {
    return (time) => {
      return {
        ...time,
        [key]: time[key] < 10 ?
          '0'+time[key]:
          time[key]
      }
    }
  }

  doubleDigits (civilianTime) {
    return compose(
      this.prependZeros('hours'),
      this.prependZeros('minutes'),
      this.prependZeros('seconds')
    )(civilianTime)
  }


  composeTime () {
    return compose(
      this.serializeTime,
      this.civilianTime,
      this.doubleDigits
    )(new Date());
  }

  start () {
    this.setState({
      time: this.composeTime(),
      intervalHandler: setInterval(this.tick, this.state.interval)
    });
  }

  tick () {
    this.setState({time: this.composeTime()})
  }

  stop () {
    clearInterval(this.state.intervalHandler);
    this.setState({intervalHandler: undefined});
  }

  render () {
    let { time } = this.props.clock;
    return (
      <div>
        <ShowTime {...time}/>
        <StartButton onStart={this.start}/>
        <StopButton onStop={this.stop}/>
      </div>
    )
  }
}

export default connect(
  state =>
    ({
      clock: state.clock
    }),
  dispatch =>
    ({
      onTick(time){
        dispatch(tickClock(time))
      }
    })
)(Clock);