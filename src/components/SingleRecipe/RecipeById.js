import React, { useState, useEffect } from "react";
import axios from "axios";
import './RecipeById.scss';
// import Favorite from "../Favorite";


// get our fontawesome imports
import { faThumbsUp, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RecipeById(props) {
  const [recipeById, setRecipeById] = useState('');
  const [moreFromUser, setMoreFromUser] = useState([]);

  const recipeId = props.recipeId

  useEffect(() => {
    axios
      .get(`/Recipes/${recipeId}`)
      .then((results) => {
        // console.log('results.data[0] before setRecipeById', results.data[0])
        setRecipeById(results.data[0])
        console.log('results.data[0] after setRecipeById', results.data[0])
        console.log('results.data[0].id after setRecipeById', results.data[0].id)
      })

  }, []);

  useEffect(() => {
    if (recipeById.user_id) {
      axios.get(`/Users/${recipeById.user_id}/recipes`)
        .then((results) => (
          setMoreFromUser(results.data)
        ))
    }
  }, [recipeById])

  const populateFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    console.log('favorites', favorites)
  }

  return (< >
    <h3>{recipeById.name}</h3>
    <div className="likesDiv">
      <button><h1 className="likes"><FontAwesomeIcon icon={faThumbsUp} /></h1>{recipeById.likes}</button>
    </div>
    <div className="favoriteDiv">
      <button onClick={populateFavorite}>
        <h1 className="favorite"><FontAwesomeIcon icon={faHeart} /></h1>
      </button>
    </div>
    <div className="recipeUrlDiv--img">
      <img src={recipeById.image} alt="display image" />
    </div>

    {/* <img src={recipeById.image} alt="display image" height="300" width="400" /> */}
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

      <div className="otherRecipesBySameUser"><h4>***All Recipes from This User:***</h4></div>
      <div className="otherRecipesBySameUser--inner">{moreFromUser.map(recipe => (
        <div>
          {/* <div>Recipe ID: {recipe.id}</div> */}

          <div className="recipeUrlDiv--thumbnail"><img src={recipe.image} alt="display image" /></div>
          <div className="otherRecipesBySameUser--text">
            <h5>{recipe.name}</h5>
            <div>{recipe.description}</div>
          </div>
        </div>))}
      </div>

    </table>

  </>);
}
