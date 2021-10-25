import React, { Component } from "react";
class Test extends Component {
  constructor() {
    super();
    Test.count++;
  }

  static count = 0;

  // if You have a method that accept a params

  helloUnknown = (name) => {
    console.log("Hello " + name);
  };

  // There's Two methods to call it inside onClick event
  // 1
  handleIncreaseWithParam = () => {
    this.helloUnknown("Younes ERRAJI");
  };
  // But the best way to do that is to use default value for param

  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-primary"
          onClick={this.handleIncreaseWithParam}
        >
          Hello Message
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.helloUnknown("Younes ERRAJI");
          }}
        >
          Hello Message 2
        </button>

        <h1>{Test.count}</h1>
      </React.Fragment>
    );
  }
}
export default Test;
