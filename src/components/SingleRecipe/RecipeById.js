import React, { useState, useEffect } from "react";
import axios from "axios";
import './RecipeById.scss';
import { render } from "react-dom";

// get our fontawesome imports
import { faHome, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RecipeById(props) {
  const [recipeById, setRecipeById] = useState('');
  const [moreFromUser, setMoreFromUser] = useState([]);

  const recipeId = props.recipeId

  useEffect(() => {
    axios
      .get(`/Recipes/${recipeId}`)
      .then((results) => setRecipeById(results.data[0]))
  }, []);

  useEffect(() => {
    if (recipeById.user_id) {
      axios.get(`/Users/${recipeById.user_id}/recipes`)
        .then((results) => (
          setMoreFromUser(results.data)
        ))
    }
  }, [recipeById])

  return (< >
    <h3>{recipeById.name}</h3>
    <div className="likesDiv">
      <span className="likes"><FontAwesomeIcon icon={faThumbsUp} />{recipeById.likes}</span>
    </div>

    <img src={recipeById.image_link} alt="display image" height="300" width="400" />
    <h4>About</h4>
    <p>{recipeById.description}</p>
    <table className="table recipe-presentation">
      <tbody>
        <tr>
          <th scope="row">Good for</th>
          <td>{recipeById.category_name}</td>
        </tr>
        <tr>
          <th scope="row">About</th>
        </tr>
        <tr>
          <th scope="row">Ingredients</th>
          <td>{recipeById.ingredients}</td>
        </tr>
        <tr>
          <th scope="row">How to prepare</th>
          <td>{recipeById.steps}</td>
        </tr>
        <tr>
          <th scope="row">Servings</th>
          <td>{recipeById.servings}</td>
        </tr>
        <tr>
          <th scope="row">Preparation time</th>
          <td>{recipeById.time}</td>
        </tr>
      </tbody>

      <div>***All Recipes from This User:***</div>
      <div>{moreFromUser.map((recipe, i) => (
        <div key={i}>
          <div>Recipe ID: {recipe.id}</div>
          <div>Name: {recipe.name}</div>
          <div>Image: <img src={recipe.image_link} alt="display image" height="50" width="80" /></div>
        </div>))}
      </div>

    </table>

  </>);
}
