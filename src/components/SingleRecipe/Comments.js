import React, { useState, useEffect } from "react";
import useToken from "../../hooks/useToken";
import axios from "axios";
import './Comments.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Buttons from '../Buttons';
import './Comments.scss';

export default function Comments(props) {
  const userIdToken = useToken();
  const userId = userIdToken.token;


  const recipeId = props.recipeId

  useEffect(() => {
    axios
      .get(`/Recipes/${recipeId}/comments`)
      .then((results) => props.setCommentsByRecipeId(results.data))
  }, []);

  // const date = new Date()
  // const today = `${date.getMonth()} - ${date.getDate()} - ${date.getFullYear()}`;

  // const timeElapsed = Date.now();
  const current = new Date();
  const postDate = current.toUTCString();
  return (
    // <div className="leaveCommentsDiv">

    <div>{props.commentsByRecipeId.map(comment => (
      <div className="postedCommentsDiv">
        <div className="commentHeader">
          <div className="sr-only">User ID of comment: {comment.user_id}</div>
          <div>Anonymous posted on:  <FontAwesomeIcon icon={faComment} /></div>
        </div>
        <div className="postedComments--comments">{comment.description}</div>
      </div>))}
    </div>

    // </div>
  );
}
