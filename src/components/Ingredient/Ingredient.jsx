const Ingredient = ({ ingredient, index, buttonType, manipulateIngredient }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button
        onClick={() =>
          buttonType === '+'
            ? manipulateIngredient(ingredient)
            : manipulateIngredient(index)
        }
      >
        {buttonType}
      </button>
    </li>
  );
};

export default Ingredient;
