
import { Navbar, Nav } from "react-bootstrap";
import './index.scss';
import { Link } from 'react-router-dom';

export default function ProfileNav() {

  return (

    <div className="profileNavDiv">

      <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to={'/'} className="nav-link">Profile Home</Link></Nav.Link>
            <Nav.Link><Link to={'/userRecipes'} className="nav-link">Created Recipes</Link></Nav.Link>
            <Nav.Link><Link to={'/favorites'} className="nav-link">Saved Favorites</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>

  );

}


