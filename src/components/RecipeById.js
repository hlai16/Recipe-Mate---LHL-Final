import React, { useState, useEffect } from "react";
import { readCookie } from "../util";
import axios from "axios";

export default function RecipeById(props) {
  //const userId = readCookie();
  const [recipeById, setRecipeById] = useState('');
  const [commentsByRecipeId, setCommentsByRecipeId] = useState([]);

  const RecipeId = 1; // props.RecipeId

  useEffect(() => {
    axios.get(`/Recipes/${RecipeId}`).then((results) => {
      setRecipeById(results.data[0]);
      axios.get(`/Recipes/${RecipeId}/comments`).then((results) => {
        setCommentsByRecipeId(results.data)
      })
      
    });
  }, []);

  return (
    <div>
      <div>Name: {recipeById.name}</div>
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
    </div>

    </div>
  );
}
