export default class Timer extends React.Component {
  render() {
    return (
      <div className="timerItem">
        <div className="row">
          <div className="col-xs-4">
            <button className="btn btn-primary timerBtn">Start</button>
          </div>
          <div className="col-xs-8">
            <div className="col-xs-12">Task Description</div>
            <div className="col-xs-12">{moment().format("hh:mm:ss")}</div>
          </div>
        </div>
      </div>
    );
  }
}
