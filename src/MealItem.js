import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <div className={classes.meal}>
      <h3>
        <span>{props.mealInfo.name}</span>
        <br />
        <span className={classes.description}>
          {props.mealInfo.description}
        </span>
        <br />
        <span className={classes.price}>${props.mealInfo.price}</span>
      </h3>
      <MealItemForm item={props.mealInfo}/>
    </div>
  );
};

export default MealItem;
