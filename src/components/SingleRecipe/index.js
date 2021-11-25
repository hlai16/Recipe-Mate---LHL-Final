import React, {useState} from 'react';
import { useLocation } from "react-router";
import RecipeById from './RecipeById';
import Comments from './Comments';
import CommentForm from './CommentForm';
import NavBar from '../NavBar';


export default function SingleRecipe(props) {
  const [commentsByRecipeId, setCommentsByRecipeId] = useState([]);
 
  const recipeId = 1;

  return(
    <>
      <NavBar setToken={props.setToken} />
      <div className="recipeUrlDiv">
        <h2>Recipe Presentation</h2>
        <RecipeById recipeId={recipeId} />
        <Comments recipeId={recipeId} commentsByRecipeId={commentsByRecipeId} setCommentsByRecipeId={setCommentsByRecipeId} />
        <CommentForm recipeId={recipeId} setCommentsByRecipeId={setCommentsByRecipeId}/>
      </div>
    </>);
}
