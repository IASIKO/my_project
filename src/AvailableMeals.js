import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";
import Card from "./Card";
import { useMealsContext } from "./MealsContext";

const AvailableMeals = () => {
  const { dummyMeals } = useMealsContext();

  return (
    <div className={classes.meals}>
      <Card>
        {dummyMeals.map((item) => (
          <ul key={item.id}>
            <MealItem mealInfo={item} />
          </ul>
        ))}
      </Card>
    </div>
  );
};

export default AvailableMeals;
