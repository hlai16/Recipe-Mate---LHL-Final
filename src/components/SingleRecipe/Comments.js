import React, { useEffect } from "react";
import axios from "axios";
import './Comments.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import './Comments.scss';

export default function Comments(props) {

  useEffect(() => {
    axios
      .get(`/Recipes/${props.recipeId}/comments`)
      .then((results) => props.setCommentsByRecipeId(results.data))
  }, []);

  return (<>

    {props.commentsByRecipeId?.map(comment => (
      <div className="postedCommentsDiv">
        <div className="commentHeader">
          <div className="sr-only">User ID of comment: {comment.user_id}</div>
          <div>{comment.user_email} says <FontAwesomeIcon icon={faComment} /></div>
        </div>
        <div className="postedComments--comments">{comment.description}</div>
      </div>
    ))}

  </>);
}
