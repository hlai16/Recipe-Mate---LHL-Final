import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import axios from 'axios';
import useToken from '../../hooks/useToken';
import RecipeById from './RecipeById';
import Comments from './Comments';
import NavBar from '../NavBar';
import CommentForm from './CommentForm';
import './RecipeById.scss';


export default function SingleRecipe(props) {
  const userIdToken = useToken();
  const userId = userIdToken.token;

  const location = useLocation();
  const recipeId = location.state || []
  const [commentsByRecipeId, setCommentsByRecipeId] = useState([]);

  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    axios
      .get(`/users/${userId}`)
      .then(res => setUserEmail(res.data[0].email))
  }, []);

  return (
    <>
      <NavBar setToken={props.setToken} />
      <div className="recipeUrlDiv">
        <h2>Recipe Presentation</h2>
        <RecipeById recipeId={recipeId} />
        <div className="leaveCommentsDiv">
          <CommentForm recipeId={recipeId} setCommentsByRecipeId={setCommentsByRecipeId} commentsByRecipeId={commentsByRecipeId} userEmail={userEmail} />
          <Comments recipeId={recipeId} setCommentsByRecipeId={setCommentsByRecipeId} commentsByRecipeId={commentsByRecipeId} />
        </div>
      </div>
    </>);
}
