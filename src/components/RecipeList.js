import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import './RecipeList.scss';

export default function RecipeList(props) {

  const location = useLocation();
  const recipes = location.state || []

  let navigate = useNavigate()
  const handleClick = function (event) {
    navigate(`/SingleRecipe`, { state: Number(event.target.id) })
  }

  return (< >
    <NavBar setToken={props.setToken} />
    <div className="recipeListDiv">
      <h2>Search Results</h2>
      {recipes.map((recipe, key) => (
        <article key={key} onClick={handleClick} id={recipe.id}>
          <h3 id={recipe.id}>{recipe.name}</h3>
          <img id={recipe.id} src={recipe.image} alt="display image" height="70" width="100" />
          <p id={recipe.id}>Category: {recipe.category_name}</p>
          <p id={recipe.id}>Likes: {recipe.likes}</p>
        </article>

      ))}
    </div>
  </>);
}
