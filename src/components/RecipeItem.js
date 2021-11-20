import React, { useState } from "react";

export default function RecipeItem(props) {

  
  return (
    <div>
     <li className="text--regular"> recipe.name</li> 
     <li className="text--light"> category.name </li>
     <li className="text--light"> recipe.description </li> 
     <li className="text--light"> recipe.Ingredients </li>
     <li className="text--light"> recipe.steps</li> 
     <li className="text--light"> recipe.servings</li> 
     <li className="text--light"> recipe.time </li>
    </div>

  );
}