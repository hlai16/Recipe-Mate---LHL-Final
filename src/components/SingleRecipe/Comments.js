import React, { useState, useEffect } from "react";
import useToken from "../../hooks/useToken";
import axios from "axios";

export default function Comments(props) {
  const userIdToken = useToken();
  const userId = userIdToken.token;
  const [commentsByRecipeId, setCommentsByRecipeId] = useState([]);

  const recipeId = props.recipeId

  useEffect(() => {
    axios
      .get(`/Recipes/${recipeId}/comments`)
      .then((results) => setCommentsByRecipeId(results.data))
    }, []);

  return (
    <div>

      <div>{commentsByRecipeId.map(comment => (
        <div>
          <div>User ID of comment: {comment.user_id}</div>
          <div>Comment description: {comment.description}</div>
        </div>))}    
      </div>

    </div>
  );
}
