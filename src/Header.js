import {Fragment} from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import image from "./meals.jpg";


const Header = (props) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton isActive={props.isActive}/>
      </header>
        <div className={classes["main-image"]}>
          <img src={image} alt="img" />
        </div>
        
    </Fragment>
  );
};

export default Header;
