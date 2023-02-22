import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useMealsContext } from "./MealsContext";

const Cart = (props) => {
  const { cartItems, totalPrice, setCartItems, setTotalPrice } =
    useMealsContext();


  return (
    <div className={classes["cart-items"]}>
      {cartItems.map((item, id) => (
        <CartItem key={id} item={item} />
      ))}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button
          className={classes.button}
          onClick={() => {
            setCartItems([]);
            setTotalPrice(0);
            props.onClose(false);
            console.log("ordering . . .");
          }}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
