import { Component } from "react";
import { ClockTime } from "./Clock.styled";

export class Clock extends Component {
state = {
    time: new Date().toLocaleTimeString(),
    }


intervalId = null

componentDidMount() {
    console.log('setInterval');

    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <ClockTime className="Clock__face">{this.state.time}</ClockTime>;
  }
}