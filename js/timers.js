class TimerList extends React.Component {
  render() {
    let timers = ["Time1", "Time2", "Time3", "Time4"];
    return React.createElement(
      "ul",
      { className: "timerList" },
      timers.map((timer, index) => {
        console.log(timer);
        return React.createElement(
          "li",
          { key: index },
          React.createElement(
            "div",
            { className: "timerItem" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-xs-4" },
                "Timer Button"
              ),
              React.createElement(
                "div",
                { className: "col-xs-8" },
                React.createElement(
                  "div",
                  { className: "col-xs-12" },
                  "Task Description"
                ),
                React.createElement(
                  "div",
                  { className: "col-xs-12" },
                  moment().format("hh:mm:ss")
                )
              )
            )
          )
        );
      })
    );
  }
}

ReactDOM.render(React.createElement(TimerList, null), document.getElementById("Timers"));
//# sourceMappingURL=C:\Users\Kiyic\Documents\Development Projects\Satellizer\js\timers.js.map