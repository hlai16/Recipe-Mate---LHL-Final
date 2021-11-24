import React, { useState, useEffect } from "react";
import useToken from "../../hooks/useToken";
import axios from "axios";
import './Comments.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Buttons from '../Buttons';

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
    <div className="leaveCommentsDiv">
      <section class="new-tweet">
        <h2>Leave a Comment  <FontAwesomeIcon icon={faComment} /></h2>
        {/* <div class="error"></div> */}
        <form id="new-tweet">
          <label for="tweet-text" class="sr-only">Tell me about what you think of my recipe</label>
          <textarea name="text" id="tweet-text" placeholder="Tell me about what you think of my recipe :)"></textarea>

          <div class="buttonDiv">
            <Buttons small type="submit">Comment</Buttons>
            {/* <output name="counter" class="counter" for="tweet-text">140</output> */}
          </div>
        </form>
      </section>
      <div>{commentsByRecipeId.map(comment => (
        <div className="postedCommentsDiv">
          <div className="commentHeader">
            <div className="sr-only">User ID of comment: {comment.user_id}</div>
            <div>dummy@placeholder.com <FontAwesomeIcon icon={faComment} /></div>
          </div>
          <div className="postedComments--comments">{comment.description}</div>
        </div>))}
      </div>

    </div>
  );
}
