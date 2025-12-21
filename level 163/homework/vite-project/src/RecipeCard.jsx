import RecipeHeader from "./RecipeHeader.jsx";
import IngredientsList from "./IngredientsList.jsx";
import Instructions from "./Instructions.jsx";

function RecipeCard({ recipeObject }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <RecipeHeader title={recipeObject.title} image={recipeObject.image} />
      <IngredientsList ingredients={recipeObject.ingredients} />
      <Instructions instructions={recipeObject.instructions} />
    </div>
  );
}

export default RecipeCard;
