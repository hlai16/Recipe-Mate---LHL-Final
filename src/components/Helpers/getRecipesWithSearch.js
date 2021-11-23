import axios from "axios";

export default function getRecipesWithSearch(event) {
  event.preventDefault()

  const search = event.target[0].value
  axios
    .get(`/search_recipes?search=${search}`)
    .then((res) => {
      const recipes = res.data
      console.log("RECIPES:", recipes)
    })
    
    // Should return a redirect to the recipe list with props being the array of recipes.
    // If it's not the case, RecipeList component will need changes
    // Also check App.js route for /recipe
}