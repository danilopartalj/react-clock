import React, { Component } from "react";

import Clock from "./Clock";

class ClockContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.adjustClock = this.adjustClock.bind(this);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  adjustClock() {
    let date = new Date();
    this.setState({
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    });
  }

  componentWillMount() {
    this.interval = setInterval(x => this.adjustClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Clock
        hours={this.state.hours}
        minutes={this.state.minutes}
        seconds={this.state.seconds}
      />
    );
  }
}

export default ClockContainer;
