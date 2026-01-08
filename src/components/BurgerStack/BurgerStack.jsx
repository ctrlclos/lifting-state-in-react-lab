// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from '../Ingredient/Ingredient.jsx'

const BurgerStack = ({ingredients, onRemove}) => {
  return (
    <ul>
      {ingredients.length === 0 ? (
        <li>No Ingredients</li>
      ) : (
        ingredients.map((ingredient, index) => (
          <Ingredient
            ingredient={ingredient}
            key={index}
            index={index}
            buttonType="X"
            manipulateIngredient={onRemove}
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
