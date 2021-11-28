import React, { useState, useEffect } from "react";
import axios from "axios";
import './RecipeById.scss';
import { Card, Button } from "react-bootstrap";
import Buttons from '../Buttons';

// get our fontawesome imports
import { faThumbsUp, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Favorites from "../AuthPages/Favorites";
import { array } from "prop-types";

export default function RecipeById(props) {
  const [recipeById, setRecipeById] = useState('');
  const [moreFromUser, setMoreFromUser] = useState([]);
  const [hasLike, setHasLike] = useState(false);
  const [message, setMessage] = useState('');



  const recipeId = props.recipeId

  useEffect(() => {
    axios
      .get(`/Recipes/${recipeId}`)
      .then((results) => {
        console.log('results.data[0].id before setRecipeById', results.data[0])
        setRecipeById(results.data[0])
        console.log('results.data[0] after setRecipeById', results.data[0])
        console.log('results.data[0].id after setRecipeById', results.data[0].id)
      })
  }, [recipeId]);

  useEffect(() => {
    if (recipeById.user_id) {
      axios.get(`/Users/${recipeById.user_id}/recipes`)
        .then((results) => (
          setMoreFromUser(results.data)
        ))
    }
  }, [recipeById])

  const handleLikes = () => {
    let prevLikesAmount = recipeById.likes;
    console.log("Likes before: ", prevLikesAmount)
    if (hasLike) {
      const newRecipeState = {...recipeById, likes: prevLikesAmount - 1}
      axios
        .put(`/Recipes/${recipeById.id}/likes`, {likes: prevLikesAmount - 1})
        .then(setRecipeById(newRecipeState))
        .then(setHasLike(false))
    } else {
      const newRecipeState = {...recipeById, likes: prevLikesAmount + 1}
      axios
        .put(`/Recipes/${recipeById.id}/likes`, {likes: prevLikesAmount + 1})
        .then(setRecipeById(newRecipeState))
        .then(setHasLike(true))
    }
  }


  console.log(recipeById)

  const addToProfile = function () {

    let favorite = [];
    if (localStorage.getItem('favorite')) {
      favorite = JSON.parse(localStorage.getItem('favorite'));
    }
    favorite.push({
      id: recipeById.id,
      name: recipeById.name,
      category: recipeById.category,
      category_name: recipeById.category_name,
      description: recipeById.description,
      image: recipeById.image,
      ingredients: recipeById.ingredients,
      likes: recipeById.likes,
      servings: recipeById.servings,
      steps: recipeById.steps,
      time: recipeById.time,
      user_id: recipeById.user_id,
    });
    if (favorite[0].addFavorite) {
      setMessage('Work');
    }
    setMessage('Added to Favorites');
    localStorage.setItem('favorite', JSON.stringify(favorite));

  }

  return (< >
    <h3>{recipeById.name}</h3>
    <div className="likesDiv">
      <button onClick={handleLikes}><h1 className="likes"><FontAwesomeIcon icon={faThumbsUp} /></h1>{recipeById.likes}</button>
    </div>
    <div className="favoriteDiv">
      <button onClick={addToProfile}>
        <h1 className="favorite"><FontAwesomeIcon icon={faHeart} /></h1>
      </button>
      <p>{message}</p>
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
      <div className="otherRecipesBySameUser--inner">{moreFromUser.map((recipe) => (
        <div>

          <Card style={{ width: '18rem' }}>

            <Card.Img variant="top" src={recipe.image} alt={recipe.name} />
            <Card.Body>
              <Card.Title>{recipe.name}</Card.Title>
              <Card.Text>
                {recipe.description}
              </Card.Text>
              <Buttons small onClick={() => setRecipeById(recipe)}>Go</Buttons>
            </Card.Body>
          </Card>

        </div>

      ))}
      </div>

    </table>

  </>);
}
