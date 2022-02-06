import React, { Component } from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../store/action";

class ClassBased extends Component {
  render() {
    const { value, increment, decrement } = this.props;
    return (
      <div style={{ textAlign: "center" }}>
        <p>{value}</p>
        <button style={{ marginRight: "10px" }} onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.value,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassBased);
