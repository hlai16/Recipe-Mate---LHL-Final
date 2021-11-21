import React from 'react';
import RecipeItem from './RecipeItem';
// User Profile needs to read from the cookie and return the users Recipes based on the ID 
export default function UserProfile() {
  
const cookie = document.cookie;
console.log(cookie)
  return(
    <div>
    <h2> User Login Profile</h2>
    {/* <li> ${cookie.userId}  </li>  */}
    </div>
  );
}

