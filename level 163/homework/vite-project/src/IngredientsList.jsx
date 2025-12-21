function IngredientsList({ ingredients }) {
  return (
    <ul>
      {ingredients.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default IngredientsList;
