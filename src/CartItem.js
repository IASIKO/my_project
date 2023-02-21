import classes from "./CartItem.module.css";
import { useMealsContext } from "./MealsContext";

const CartItem = (props) => {
  const { dummyMeals, incrementItem, decrementItem } =
    useMealsContext();

  const onRemove = () => {
    decrementItem(props.item);
  };

  const onAdd = () => {
    incrementItem(props.item);
  };

  const meal = dummyMeals.find((i) => props.item.id === i.id);
  const price = `$${meal.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{meal.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
