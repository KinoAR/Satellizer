class ElapsedTimer extends React.Component {
  render() {
    return (
      <h3> Elapsed Time: {this.props.date.toString()}</h3>
    );
  }
}

function tick() {
  ReactDOM.render(<ElapsedTimer date={new moment().format("hh:mm:ss")} />,
document.getElementById('elapsedTimer'));
}

setInterval(tick, 1000);
