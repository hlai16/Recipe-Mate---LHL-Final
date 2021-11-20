
import './App.css';
import useApplicationData from "./hooks/useApplicationData";
import Buttons from './components/Buttons.js';

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
      <Buttons>Hello</Buttons>
    </div>
  );
}

export default App;
