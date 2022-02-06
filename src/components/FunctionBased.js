import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/action";

function FunctionBased() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center" }}>
      <p>{value}</p>
      <button
        style={{ marginRight: "10px" }}
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default FunctionBased;
