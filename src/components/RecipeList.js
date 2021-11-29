import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { Col,Container,Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import './RecipeList.scss';

export default function RecipeList(props) {

  const location = useLocation();
  const recipes = location.state || []

  let navigate = useNavigate()
  const handleClick = function (event) {
    console.log("recipe",event.target.id)
    navigate(`/SingleRecipe`, { state: Number(event.target.id) })
  }

  return (< >
    <NavBar setToken={props.setToken} />
    <div className="recipeListDiv">
    <Container>
      <div> 
      <h2>Search Results</h2>
      </div>
      {recipes.map((recipe, key) => (
        <div id={recipe.id} className="searchItem">
        <article key={key} onClick={handleClick} id={recipe.id}> 
        <Container id={recipe.id}>
  
        <Row id={recipe.id}> <h3 id={recipe.id}>{recipe.name}</h3> </Row>
 
        <Col id={recipe.id}>
        <div className="Search--img">
        <img id={recipe.id} src={recipe.image} alt="display image" height="70" width="100" />
  
        </div>
        </Col>
        <Col id={recipe.id}>
          <p id={recipe.id}>Category: {recipe.category_name}</p>
          <p id={recipe.id} ><FontAwesomeIcon icon={faThumbsUp} /> {recipe.likes} Likes </p>
        </Col>
        
        </Container>
        </article>
        </div>
      ))}
     </Container>
    </div>
  </>);
}
