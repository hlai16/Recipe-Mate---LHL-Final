import React, { useState } from 'react';
import { useLocation } from "react-router";
import RecipeById from './RecipeById';
import Comments from './Comments';
import NavBar from '../NavBar';
import CommentForm from './CommentForm';
import './RecipeById.scss';


export default function SingleRecipe(props) {

  const location = useLocation();
  const recipeId = location.state || []
  const [commentsByRecipeId, setCommentsByRecipeId] = useState([]);

  return (
    <>
      <NavBar setToken={props.setToken} />
      <div className="recipeUrlDiv">
        <h2>Recipe Presentation</h2>
        <RecipeById recipeId={recipeId} />
        <div className="leaveCommentsDiv">
          <CommentForm recipeId={recipeId} setCommentsByRecipeId={setCommentsByRecipeId} />
          <Comments recipeId={recipeId} setCommentsByRecipeId={setCommentsByRecipeId} commentsByRecipeId={commentsByRecipeId} />
        </div>
      </div>
    </>);
}
