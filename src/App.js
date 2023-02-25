// import React, { useState } from "react";
// import AvailableMeals from "./AvailableMeals";
// import Cart from "./Cart";
// import Header from "./Header";
// import MealsProvider from "./MealsContext";
// import MealsSummary from "./MealsSummary";
// import classes from "./Modal.module.css";

// const style = {
//   backgroundColor: "rgba(0, 0, 0, 0.75)",
// };

// function App() {
//   const [isModal, setIsModal] = useState(false);

//   const handleCloseCart = () => {
//     setIsModal(false);
//   };

//   return (
//     <MealsProvider>
//       <main style={style}>
//         <Header isActive={setIsModal} />
//         <MealsSummary />
//         <AvailableMeals />
//         {isModal && (
//           <div className={classes.backdrop} onClick={handleCloseCart}>
//             <div
//               className={classes.modal}
//               onClick={(event) => event.stopPropagation()}
//             >
//               <Cart onClose={handleCloseCart} />
//             </div>
//           </div>
//         )}
//       </main>
//     </MealsProvider>
//   );
// }

// export default App;

//  batoni maximilianis virtuozobani

import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsSown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
      <CartProvider>
        {cartIsSown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
  );
};

export default App;
