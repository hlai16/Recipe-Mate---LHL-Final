import React, { useState, useEffect } from "react";
import axios from "axios";
import Buttons from '../Buttons';
import useToken from '../../hooks/useToken';
import { Card, Button } from "react-bootstrap";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import Favorites from './Favorites';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import NavBar from '../NavBar';
// User Profile needs to read from the cookie and return the users Recipes based on the ID 


export default function UserProfile(props) {
const userIdToken = useToken();
const userId = userIdToken.token;
const [moreFromUser, setMoreFromUser] = useState([]);
const location = useLocation();
const recipes = location.state || []
let navigate = useNavigate();


    useEffect(() => {
    if (userId) {
    axios.get(`/Users/${userId}/recipes`)
    .then((results) => (
    setMoreFromUser(results.data)
    ))
    }
    }, [])


    const handleDelete = function(id) {
      axios.delete(`/recipes/${id}`, {id}).then(response => {
        console.log(response);
      })
    }
 
  return (
    <>
      <Favorites user_Id={userId}></Favorites>
      <div className="otherRecipesBySameUser--inner">{moreFromUser.map((recipe) => (
        <div>
           
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={recipe.image} alt={recipe.name} />
            <Card.Body>
              <Card.Title>{recipe.name}</Card.Title>
              <Card.Text>
                {recipe.description}
              </Card.Text>
              <Buttons onClick={ () => navigate(`/SingleRecipe`, { state: Number(recipe.id) })} >Visit</Buttons>
              <Buttons small onClick= { () => navigate(`/SingleRecipe`, { state: Number(recipe.id) })}> Modify</Buttons>
              <Buttons onClick={() => handleDelete(recipe.id)}><FontAwesomeIcon icon={faTrashAlt} />Remove</Buttons>
            </Card.Body>
          </Card>
          
        </div>

      ))}
      </div>
     </>
  
 );
}


