import axios from "axios";


export default function getRecipesWithSearch(event) {
  event.preventDefault()

  const search = event.target[0].value
  axios.get(`/search_recipes?search=${search}`)
  .then((all) => {
      const recipes = all.data
      console.log("RECIPES:", recipes)
    });

      // for (const user of Users) {
      //   if (user.email === email) {
      //     if (user.password === password) {
      //       console.log("User id is:", user.id)
      //       return user.id
      //     } 
        //   else {
        //     return "Incorrect password"
        //   }
        // } else {
        //   return "Email not found"
        //}
      //}
  //return userId
}