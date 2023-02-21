import classes from "./Input.module.css";

const Input = ({inputChangeHandler, number}) => {
  
  return (
    <div className={classes.input}>
      <label>Amount</label>
      <input type="number" name="amount" value={number} onChange={inputChangeHandler} min={1}></input>
    </div>
  );
};

export default Input;
