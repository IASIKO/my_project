// import React, { useState } from "react";
import classes from "./Input.module.css";

const Input = ({inputChangeHandler, number}) => {
  // const [number, setNumber] = useState({
  //   amount: 1
  // });

  // const inputChangeHandler = (event) => {
  //   const{value, name} = event.target
  //   setNumber((values) => ({ ...values, [name]: value }));
  // };

  return (
    <div className={classes.input}>
      <label>Amount</label>
      <input type="number" name="amount" value={number} onChange={inputChangeHandler} min={1}></input>
    </div>
  );
};

export default Input;
