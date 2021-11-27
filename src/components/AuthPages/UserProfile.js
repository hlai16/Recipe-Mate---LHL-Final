import React from 'react';
import useToken from '../../hooks/useToken';
import Welcome from './Welcome';
import Favorites from './Favorites';
// import NavBar from '../NavBar';
// User Profile needs to read from the cookie and return the users Recipes based on the ID 


export default function UserProfile(props) {
const userIdToken = useToken();
const user_Id = userIdToken.token;

  return (
    <div>
      {/* <NavBar setToken={ props.setToken } /> */}
      <h2> User Login Profile</h2>
      <li> {user_Id} </li>
      <Welcome userId={user_Id} />

      <Favorites />
    </div>
  );
}

