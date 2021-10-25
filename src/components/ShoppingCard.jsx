import React, { Component } from "react";
export default class ShoppingCard extends Component {
  constructor(props) {
    super();
    this.state = {
      count: props.count,
      exists: props.exists,
    };
    this.handleIncrease = this.handleIncrease.bind(this);
    // this.handleDecrease = this.handleDecrease.bind(this);
  }

  styles = {
    fontWeight: 600,
    fontSize: 22,
    fontFamily: "cursive",
    margin: 0,
  };

  render() {
    // console.log(this.props.children);
    return (
      <div className="d-flex align-items-center col-lg-4 col-md-3 col-sm-2 mt-1 mb-1 justify-content-between p-1 border">
        <div
          /* style={{
            fontWeight: 600,
            fontSize: 22,
            fontFamily: "cursive",
            margin: 0
          }} */
          style={this.styles}
        >
          {this.props.children}
        </div>
        <span
          className={`badge badge-${
            this.state.count !== 0 ? "primary" : "warning m-1"
          }`}
        >
          {this.state.count === 0 ? "Zero" : this.state.count}
        </span>
        <button className="btn btn-primary m-1" onClick={this.handleIncrease}>
          +
        </button>
        <button
          className={`btn btn-${
            this.state.count === 0 ? "secondary disabled" : "warning"
          } m-1`}
          onClick={this.handleDecrease}
        >
          -
        </button>
        <button onClick={this.handleDelete} className="btn btn-danger m-1">
          Delete
        </button>
      </div>
    );
  }

  handleIncrease() {
    console.log(this);
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  }

  handleDecrease = () => {
    const { count } = this.state;
    if (count > 0) {
      this.setState({
        count: count - 1,
      });
    }
  };

  handleDelete = () => {
    const { exists } = this.state;
    if (exists) {
      this.setState({
        exists: false,
      });
    }
  };
}
