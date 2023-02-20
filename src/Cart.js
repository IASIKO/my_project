import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useMealsContext } from "./MealsContext";

const Cart = (props) => {
  const { cartItems } = useMealsContext();

  const onCloseHandler = () => {
    props.isActive();
  };

  return (
    <div className={classes["cart-items"]}>
      {cartItems.map((item, id) => (
        <CartItem key={id} item={item}/>
      ))}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$20</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCloseHandler}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
