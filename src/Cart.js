import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useMealsContext } from "./MealsContext";


const Cart = (props) => {
  const { cartItems, dummyMeals, totalPrice } = useMealsContext();

  const onCloseHandler = () => {
    props.isActive();
  };

  // console.log("totaluri jami", totalPrice);



  return (
    <div className={classes["cart-items"]}>
      {cartItems.map((item, id) => (
        <CartItem key={id} item={item}/>
      ))}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalPrice.toFixed(2)}</span>
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

