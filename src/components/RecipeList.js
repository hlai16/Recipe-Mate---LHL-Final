import { useLocation } from "react-router";
import NavBar from "./NavBar";

export default function RecipeList(props) {
  
  const location = useLocation();
  const recipes = location.state || []
  
  return (< > 
    <NavBar setToken={props.setToken} />
    <h2>Search Results</h2>
    {recipes.map((recipe, key) => (
      <article key={key}>
        <h3>{recipe.name}</h3>
        <img src={recipe.image} alt="display image" height="70" width="100"/>
        <p>Category: {recipe.category_name}</p>
        <p>Likes: {recipe.likes}</p>
      </article>
    ))}

  </>);
}
