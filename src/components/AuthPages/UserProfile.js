import React from 'react';
import useToken from '../../hooks/useToken';
// User Profile needs to read from the cookie and return the users Recipes based on the ID 


export default function UserProfile() {
const userIdToken = useToken();
const user_Id = userIdToken.token;

  return (
    <div>
      <h2> User Login Profile</h2>
      <li> {user_Id} </li> 
    </div>
  );
}

