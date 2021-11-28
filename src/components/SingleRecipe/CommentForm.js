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
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    axios
      .get(`/users/${user_id}`)
      .then(res => setUserEmail(res.data[0].email))
  }, []);


  const handleSubmit = (recipe_id, user_id, description) => {
    axios
      .post(`/Recipes/${recipe_id}/comments`, { recipe_id, user_id, description })
      .then(response => props.setCommentsByRecipeId(prev => [ {...response.data[0], user_email: userEmail},...prev ]))
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

