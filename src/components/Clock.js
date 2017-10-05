import React from "react";
import PropTypes from "prop-types";

const Clock = props => {
  return (
    <span>
      <span>{props.hours}</span> :
      <span>{props.minutes}</span> :
      <span>{props.seconds}</span>
    </span>
  );
};

Clock.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired
};

export default Clock;
