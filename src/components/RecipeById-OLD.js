import React, { useState, useEffect } from "react";
import { readCookie } from "../util";
import axios from "axios";

export default function RecipeById(props) {
  //const userId = readCookie();
  const [recipeById, setRecipeById] = useState('');
  const [commentsByRecipeId, setCommentsByRecipeId] = useState([]);
  const [moreFromUser, setMoreFromUser] = useState([]);

  const RecipeId = 1; // props.RecipeId

  // useEffect(() => {
  //   axios.get(`/Recipes/${RecipeId}`).then((results) => {
  //     setRecipeById(results.data[0]);
  //     axios.get(`/Recipes/${RecipeId}/comments`).then((results) => {
  //       setCommentsByRecipeId(results.data)
  //     })
  //   });
  // }, []);

  useEffect(() => {
    axios
      .get(`/Recipes/${RecipeId}`)
      .then((results) => setRecipeById(results.data[0]))
      .then(
    axios
      .get(`/Recipes/${RecipeId}/comments`)
      .then((results) => setCommentsByRecipeId(results.data))
    )
      /* .then(
    axios
      .get(`/Users/${recipeById.user_id}/recipes`)
      .then((results) => setMoreFromUser(results.data))
    ) */
  }, []);

  return (
    <div>
      <div>Name: {recipeById.name}</div>
      <div> <img src={recipeById.image_link} alt="display image" height="300" width="400"/> </div>
      <div>Category: {recipeById.category}</div>
      <div>Description: {recipeById.description}</div>
      <div>Ingredients: {recipeById.ingredients}</div>
      <div>Steps: {recipeById.steps}</div>
      <div>Servings: {recipeById.servings}</div>
      <div>Time: {recipeById.time}</div>
      <div>Likes: {recipeById.likes}</div>

      <div>***Comments below:***</div>
      <div>{commentsByRecipeId.map(comment => (
        <div>
        <div>User ID of comment: {comment.user_id}</div>
        <div>Comment description: {comment.description}</div>
      </div>))}


      <div>***All Recipes from This User:***</div>
      <div>***NOTE: Not working, seems to have the state stale. Breaks the server atm.***</div>
{/*       <div>{moreFromUser.map(recipe => (
        <div>
        <div>Recipe ID: {recipe.id}</div>
        <div>Name: {recipe.name}</div>
        <div>Image: <img src={recipe.image_link} alt="display image" height="50" width="80"/></div>
      </div>))} */}

    </div>

    </div>
  );
}
