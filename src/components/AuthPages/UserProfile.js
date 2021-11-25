import React from 'react';
import useToken from '../../hooks/useToken';
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

// User Profile needs to read from the cookie and return the users Recipes based on the ID 


export default function UserProfile() {
const userIdToken = useToken();
const user_Id = userIdToken.token;

  return (
    <div>
      <h2> User Login Profile</h2>
      <li> {user_Id} </li> 
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Fish_and_chips_blackpool.jpg/800px-Fish_and_chips_blackpool.jpg" />
  <Card.Body>
    <Card.Title>Vegan Fish and Chips</Card.Title>
    <Card.Text>
      This are the world's best Vegan Fish and chips with , simple instructions
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Ingredients : Celeriac, batter and Oil</ListGroupItem>
    <ListGroupItem> Directions: first bake Celerac until soft and then pan fry in Batter</ListGroupItem>
    <ListGroupItem>Servings 2-3 ppl</ListGroupItem>
    <ListGroupItem>Time 30 minutes</ListGroupItem>
    <ListGroupItem> likes 150 </ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

    </div>
  );
}

