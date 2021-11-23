import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import getRecipesWithSearch from "./Helpers/getRecipesWithSearch";
import { readCookie } from "../util";
import axios from "axios";

export default function RecipeList(props) {
  //const userId = readCookie();
  // will receive the array from search in props

  const recipes = props.recipes
  
  return (< > 
    <NavBar setToken={props.setToken} />
    <h2>Search Results</h2>
    {recipes.map(recipe => (
      <article>
        <h3>Name: {recipe.name}</h3>
        <img src={recipe.image} alt="display image" height="70" width="100"/>
        <p>Category: {recipe.category_name}</p>
        <p>Likes: {recipe.likes}</p>
      </article>
    ))}

  </>);
}
