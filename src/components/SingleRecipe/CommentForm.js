import React, { useState, useEffect } from "react";
import useToken from "../../hooks/useToken";
import axios from "axios";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import './Comments.scss';
import Buttons from '../Buttons';


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
    .then(response => props.setCommentsByRecipeId(prev => [ response.data[0],...prev, ]))
    .then(()=> setDescription(''));
  };

  return (
    <div>
       <section class="new-tweet">
      <Form>

        <Form.Group className="mb- 3">
        <h2>Leave a Comment  <FontAwesomeIcon icon={faComment} /></h2>

          <textarea
            className="new-tweet textarea"
            type="text"
            placeholder="Tell me about what you think of my recipe :)"
            name="decription"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Buttons small
        // type="button"
        // className="button button--small"
        onClick={() => handleSubmit (recipe_id, user_id, description)}
      >Send</Buttons>
      </section>
    </div>
  );
}

