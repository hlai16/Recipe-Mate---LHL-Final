import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { Col,Container,Row } from "react-bootstrap";
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
       <div class="card mb-3" style="max-width: 540px;"> 
       <div class="row no-gutters">
         <div class="col-md-4">
           <img src={recipe.image} class="card-img" alt="..." height="70" width="100"/>
         </div>
         <div class="col-md-8">
           <div class="card-body">
             <h5 class="card-title">Card title</h5>
             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
           </div>
         </div>
       </div>
     </div>
      ))}
       
    </div>
  </>);
}

// {recipes.map((recipe, key) => (
//   <div className="searchItem">
// <Container>
//   <article key={key} onClick={handleClick} id={recipe.id}>
//   <Col>
//   <img id={recipe.id} src={recipe.image} alt="display image" height="70" width="100" />
//   </Col>
//   <Col>
//     <h3 id={recipe.id}>{recipe.name}</h3>
//     <p id={recipe.id}>Category: {recipe.category_name}</p>
//     <p id={recipe.id}>Likes:{recipe.likes}</p>
//   </Col>
//   </article>
//   </Container>
//   </div>
// ))}
 
// </div>
// </>);
// }