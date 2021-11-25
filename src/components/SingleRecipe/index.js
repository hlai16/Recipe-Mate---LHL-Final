import React, {useState} from 'react';
import RecipeById from './RecipeById';
import Comments from './Comments';
import CommentForm from './CommentForm';
import NavBar from '../NavBar';


export default function SingleRecipe(props) {
  const [commentsByRecipeId, setCommentsByRecipeId] = useState([]);
  const recipeId = 2; // hardcoded. Should be replaced with search, link, whatever. props, maybe?
 
  return (
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
