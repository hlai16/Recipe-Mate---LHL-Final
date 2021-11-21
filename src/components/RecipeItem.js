import React, { useState, useEffect } from "react";
import { readCookie } from "../util";
import axios from "axios";

export default function RecipeItem(props) {
  const userId = readCookie();
  const [receipe, setRecipe] = useState([]);
  useEffect(() => {
    axios.get(`/Recipes/${userId}`).then((results) => {
      setRecipe(results.data);
      console.log(results.data);
    });
  }, []);
  return (
    <div>
      {recipe.map((rec, key) => (
       <div key={key}>{rec.name}</div>
      ))}
     
    </div>
  );
}
