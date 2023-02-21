import React, { createContext, useContext, useState } from "react";

export const MealsContext = createContext();

export const useMealsContext = () => useContext(MealsContext);

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealsProvider = ({ children }) => {
  const [dummyMeals, setDummyMeals] = useState(DUMMY_MEALS);
  const [cartItems, setCartItems] = useState([]);
  const [submited, setSubmited] = useState(false);
  const [bump, setBump] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item, amount) => {
    const itemFind = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (itemFind > -1) {
      cartItems[itemFind] = {
        id: item.id,
        amount: cartItems[itemFind].amount + parseInt(amount),
      };
    } else {
      const newItem = { id: item.id, amount: parseInt(amount) };
      setCartItems([...cartItems, { ...item, amount, newItem }]);
    }
    setTotalPrice(totalPrice + item.price * amount);
  };

  const removeFromCart = (item) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    // console.log(newCartItems);
    setCartItems(newCartItems);
  };

  const incrementItem = (item) => {
    const newCartItems = [...cartItems];
    const itemIndex = newCartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    newCartItems[itemIndex].amount++;
    setCartItems(newCartItems);
    setTotalPrice(totalPrice + item.price);
  };

  const decrementItem = (item) => {
    const newCartItems = [...cartItems];
    const itemIndex = newCartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (newCartItems[itemIndex].amount > 1) {
      newCartItems[itemIndex].amount--;
      setCartItems(newCartItems);
    } else {
      removeFromCart(item);
    }
    setTotalPrice(totalPrice - item.price);
  };

  return (
    <MealsContext.Provider
      value={{
        dummyMeals,
        setDummyMeals,
        addToCart,
        cartItems,
        setCartItems,
        setSubmited,
        submited,
        bump,
        setBump,
        totalPrice,
        setTotalPrice,
        removeFromCart,
        incrementItem,
        decrementItem,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;
