import Timer from "./timer";

class TimerList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ul className="timerList">
        {this.props.timers.map((timer, index) => {
          console.log(timer);
          return (
            <li key={index}>
              {this.props.timers[index]}
            </li>);
        })}
      </ul>
    );
  }

  addTimer() {
    this.props.timers.push(<Timer />);
  }
}


ReactDOM.render(<TimerList timers={[<Timer />, <Timer />]} />, document.getElementById("Timers"));
