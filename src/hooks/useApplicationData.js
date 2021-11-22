
import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
    // setting the initial state of the below 4 keys
    const [state, setState] = useState({
        recipes: []
    });
    
        
    useEffect(() => {
        
        axios.get('/Recipes')
        .then((all) => {
            // console.log(all.data)
            setState(prev => ({...prev, recipes: all.data}))
        });
    }, []);    // important to add [], if not, will be calling api in an infinite loop.
    return { state }
    // need to return the above keys in order to use them in Application.js
}

  // // function to book appointment
  // function createRecipe(user, name, category, description, ingredients, steps, servings, time) {
  //   console.log(user, name, category, description, ingredients, steps, servings, time);

  //   const recipe = {
  //     ...state.appointments[id],
  //     recipe: { ...recipe },
  //   };

  //   const newRecips = {
  //     ...state,
  //   recipes,
  //   };
  //   return axios.put(`/recipes/`, { recipe}).then(() => {
  //    updateSpots(newRecipes, id);
    
  //   });
  // }