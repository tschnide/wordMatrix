import React from "react";

// This likely needs to be removed, it's what is left of a timer component.
class Timer extends React.Component {
  state = {
    minutes: 1,
    seconds: 0,
  };

  myInterval = setInterval(() => {
  }, 1000);

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        <h1>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      </div>
    );
  }
}

export default Timer;
