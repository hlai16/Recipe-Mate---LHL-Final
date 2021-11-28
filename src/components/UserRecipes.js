import React, { useState, useEffect } from "react";
import useToken from "../hooks/useToken";
import axios from "axios";

export default function UserRecipes(props) {
  const userIdToken = useToken();
  const userId = userIdToken.token;
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    axios.get(`/users/${userId}/recipes`).then((results) => {
      setRecipe(results.data);
      console.log(results.data);
    });
  }, []);
  return (
  
    <div>
  
      {recipe.map(rec => (
        <div> 
<div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="..." class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
     
    
  );
};
