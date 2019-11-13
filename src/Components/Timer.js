import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      start: false
    };
    setInterval(() => {
      if (this.state.start) {
        this.setState({
          time: this.state.time + 1,
          hours: parseInt(this.state.time / 3600),
          minutes: parseInt((this.state.time % 3600) / 60),
          seconds: parseInt((this.state.time % 3600) % 60)
        });
      }
    }, 1000);
  }
  Onclick = () => {
    this.setState({ start: !this.state.start });
  };
  reset = () => {
    this.setState({
      time: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      start: true
    });
  };
  render() {
    return (
      <div className="hole-time">
        <div className="time">
          <div className="T">
            <span>
              {this.state.hours < 10
                ? "0" + this.state.hours
                : this.state.hours}
              :
            </span>
            <p>Hour</p>
          </div>
          <div className="T">
            <span>
              {" "}
              {this.state.minutes < 10
                ? "0" + this.state.minutes
                : this.state.minutes}
              :
            </span>
            <p>Minutes</p>
          </div>
          <div className="T">
            <span>
              {" "}
              {this.state.seconds < 10
                ? "0" + this.state.seconds
                : this.state.seconds}
            </span>
            <p>Seconds</p>
          </div>
        </div>
        <div className="Buttons">
          <button onClick={this.Onclick}>
            {this.state.start ? "Pause" : "Start"}
          </button>

          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
export default Timer;
