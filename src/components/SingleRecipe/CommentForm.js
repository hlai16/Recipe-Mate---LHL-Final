import React, { useState, useEffect } from "react";
import useToken from "../../hooks/useToken";
import axios from "axios";
import { Form } from "react-bootstrap";


export default function CommentForm(props) {
  const userIdToken = useToken();
  const user_id = userIdToken.token;
  const recipe_id = props.recipeId
  const [description, setDescription] = useState([]);

  const handleSubmit = (
    recipe_id,
    user_id,
    description
  
  ) => {
    
    let data = {
      recipe_id: recipe_id,
      user_id: user_id,
      description: description
    };
    console.log("Data to be posted ", { ...data });
    axios.post(`/Recipes/${recipe_id}/comments`, { ...data })
    .then(response => props.setCommentsByRecipeId(prev => [...prev, response.data[0]]))
    .then(()=> setDescription(''));
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb- 3">
          <Form.Label>Recipe Name:</Form.Label>
          <Form.Control
            type="text"
            name="decription"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
      </Form>
      <input
        type="button"
        className="button button--small"
        value="comment"
        onClick={() => handleSubmit (recipe_id, user_id, description)}
      />
    </div>
  );
}

