import React, { useState } from "react";
import AvailableMeals from "./AvailableMeals";
import Cart from "./Cart";
import Header from "./Header";
import MealsProvider from "./MealsContext";
import MealsSummary from "./MealsSummary";
import classes from "./Modal.module.css";

const style = {
  backgroundColor: "rgba(0, 0, 0, 0.75)",
};

function App() {
  const [isModal, setIsModal] = useState(false);

  const handleCloseCart = () => {
    setIsModal(false);
  };

  return (
    <MealsProvider>
      <div style={style}>
        <Header isActive={setIsModal} />
        <MealsSummary />
        <AvailableMeals />
        {isModal && (
          <div className={classes.backdrop} onClick={handleCloseCart}>
            <div
              className={classes.modal}
              onClick={(event) => event.stopPropagation()}
            >
              <Cart onClose={handleCloseCart} />
            </div>
          </div>
        )}
      </div>
    </MealsProvider>
  );
}

export default App;
