// src/components/IngredientList/IngredientList.jsx
import Ingredient from '../Ingredient/Ingredient.jsx'

const IngredientList = ({ ingredients, onAdd }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          ingredient={ingredient}
          key={index}
          buttonType="+"
          manipulateIngredient={onAdd}
        />
      ))}
    </ul>
  );
};

export default IngredientList;
