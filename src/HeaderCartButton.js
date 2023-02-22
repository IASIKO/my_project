import React, { useEffect } from "react";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useMealsContext } from "./MealsContext";

const HeaderCartButton = (props) => {
  const { setSubmited, submited, cartItems } = useMealsContext();

  useEffect(() => {
    if (submited) {
      const timer = setTimeout(() => {
        setSubmited(false);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [submited, setSubmited]);
  

  const totalAmount = cartItems.reduce((total, item) => total + item.amount, 0);

  const onCartButtonHandler = () => {
    props.isActive(true);
    setSubmited(true);
    setTimeout(() => {
      setSubmited(false);
    }, 300);
  };
  return (
    <button
      className={`${classes.button} ${submited ? classes.bump : ""}`}
      onClick={onCartButtonHandler}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
