import React, { useState } from "react";
import AvailableMeals from "./AvailableMeals";
import Cart from "./Cart";
import Header from "./Header";
import MealsProvider from "./MealsContext";
import MealsSummary from "./MealsSummary";
import classes from "./Modal.module.css";

function App() {
  const [isModal, setIsModal] = useState(false);

  return (
    <MealsProvider>
      <Header isActive={setIsModal} />
      <MealsSummary />
      <AvailableMeals />
      {isModal && (
        <div className={classes.backdrop}>
          <div className={classes.modal}>
            <Cart isActive={setIsModal}/>
          </div>
        </div>
      )}
    </MealsProvider>
  );
}

export default App;
