
import './App.css';
import useApplicationData from "./hooks/useApplicationData";

function App() {
  const { state } = useApplicationData();
  const recipeList = state.recipes.map(recipe => {
    return (
      <li className="recipeInfo">
        {recipe.name}
      </li>
    )
  });

  return (
    <div className="App">
      <ul>{recipeList}</ul>
    </div>
  );
}

export default App;
