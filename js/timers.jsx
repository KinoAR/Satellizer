class TimerList extends React.Component {
  render() {
    let timers = ["Time1", "Time2", "Time3", "Time4"];
    return (
      <ul className="timerList">
        {timers.map((timer, index) => {
          console.log(timer);
          return (
            <li key={index}>
              <div className="timerItem">
                <div className="row">
                  <div className="col-xs-4">Timer Button</div>
                  <div className="col-xs-8">
                    <div className="col-xs-12">Task Description</div>
                    <div className="col-xs-12">{moment().format("hh:mm:ss")}</div>
                  </div>
                </div>
              </div></li>);
        })}
      </ul>
    );
  }
}


ReactDOM.render(<TimerList />, document.getElementById("Timers"));
