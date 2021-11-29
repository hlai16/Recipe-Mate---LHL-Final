import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import './RecipeList.scss';

export default function RecipeList(props) {

  const location = useLocation();
  const recipes = location.state || []

  let navigate = useNavigate()
  const handleClick = function (event) {
    console.log("recipe", event.target.id)
    navigate(`/SingleRecipe`, { state: Number(event.target.id) })
  }

  return (< >
    <NavBar setToken={props.setToken} />
    <div className="recipeListDiv">
      <section>
        <div>
          <h1>Search Results</h1>
        </div>
        {recipes.map((recipe, key) => (
          <div id={recipe.id} className="searchItem">
            <article key={key} onClick={handleClick} id={recipe.id}>
              <div id={recipe.id}>

                <h3 id={recipe.id}>{recipe.name}</h3> 

                <section id={recipe.id}>
                  <div className="Search--img">
                    <img id={recipe.id} src={recipe.image} alt="display image" height="70" width="100" />

                  </div>
                </section>
                <section id={recipe.id}>
                  <p id={recipe.id}>Category: {recipe.category_name}</p>
                  <p id={recipe.id} ><FontAwesomeIcon icon={faThumbsUp} /> {recipe.likes} Likes </p>
                </section>

              </div>
            </article>
          </div>
        ))}
      </section>
      {/* </Container> */}
    </div>
  </>);
}
