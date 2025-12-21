import recipeData from "./recipeData.jsx";
import RecipeCard from "./RecipeCard.jsx";

function App() {
  return (
    <div>
      {recipeData.map((recipe, index) => (
        <RecipeCard key={index} recipeObject={recipe} />
      ))}
    </div>
  );
}

export default App;
