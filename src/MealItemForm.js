import React, { useState } from "react";
import Input from "./Input";
import classes from "./MealItemForm.module.css";
import { useMealsContext } from "./MealsContext";

const MealItemForm = (props) => {

  const {addToCart, setSubmited} = useMealsContext()

  const [number, setNumber] = useState(1);

  const inputChangeHandler = (event) => {
    const {value} = event.target
    setNumber(value);
  };

  const addMealSubmit = (event) => {
    event.preventDefault();
    setSubmited(true)
    addToCart(props.item, number)
    // console.log( "Number", number);
    setNumber(1)
  };

  return (
    <form className={classes.form} onSubmit={addMealSubmit}>
      <Input number={number} inputChangeHandler={inputChangeHandler}/>
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
