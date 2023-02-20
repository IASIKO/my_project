import React from "react";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useMealsContext } from "./MealsContext";

const HeaderCartButton = (props) => {
  const {setSubmited, submited } = useMealsContext()

  const onCartButtonHandler = () => {
    props.isActive(true)
    setSubmited(true)
    setTimeout(() => {
      setSubmited(false)
    }, 300);
  }
  return (
    <button className={`${classes.button} ${submited ? classes.bump : ''}`} onClick={onCartButtonHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
