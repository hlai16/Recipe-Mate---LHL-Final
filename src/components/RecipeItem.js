import React, { useState, useEffect } from "react";
import { readCookie } from "../util";
import axios from "axios";
import { Navbar } from "react-bootstrap";

export default function RecipeItem(props) {
  const userId = readCookie();
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
       <div> name:{rec.name}</div>
       <div> name:{rec.category}</div>
       <div> Description:{rec.description}</div>
       <div> Ingredients:{rec.ingredients}</div>
       <div> Steps:{rec.steps}</div>
       <div> Servings:{rec.servings}</div> 
       <div> Recipe Time:{rec.time} minutes</div>
       <div> Likes:{rec.likes}</div>
       </div>))}
     
    </div>
  );
}
